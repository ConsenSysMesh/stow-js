import TruffleContract from 'truffle-contract';

import LinniaHub from './contracts/LinniaHub';
import LinniaUsers from './contracts/LinniaUsers';
import LinniaRecords from './contracts/LinniaRecords';
import LinniaPermissions from './contracts/LinniaPermissions';

import _deploy from './deploy';
import _recordsFunctions from './records';
import _permissionsFunctions from './permissions';
import _encoding from './encoding';
import _util from './util';

/**
 * Linnia API object
 */
class Linnia {
  /**
   * Create a new Linnia API object
   * @param {Object} web3 An instantiated web3 API object
   * @param {Object} ipfs An instantiated ipfs API object
   * @param {?{?hubAddress: String}} opt Optional constructor options
   * @returns {Linnia} Created Linnia API object
   */
  constructor(web3, ipfs, opt = {}) {
    this.web3 = web3;
    this.ipfs = ipfs;
    // truffle contracts
    this._hub = TruffleContract(LinniaHub);
    this._users = TruffleContract(LinniaUsers);
    this._records = TruffleContract(LinniaRecords);
    this._permissions = TruffleContract(LinniaPermissions);
    this._hub.setProvider(web3.currentProvider);
    this._users.setProvider(web3.currentProvider);
    this._records.setProvider(web3.currentProvider);
    this._permissions.setProvider(web3.currentProvider);
    // set hub address
    if (opt.hubAddress) {
      // using user defined address
      this._hubAddress = opt.hubAddress;
    }
  }

  /**
   * Get Linnia contract instances, wrapped in truffle contract
   * @returns {Promise<{hub: Object, users: Object, records: Object, permissions: Object}>}
   */
  async getContractInstances() {
    const hubInstance = await this._getHubInstance();
    const usersAddress = await hubInstance.usersContract();
    const recordsAddress = await hubInstance.recordsContract();
    const permissionsAddress = await hubInstance.permissionsContract();
    return {
      hub: hubInstance,
      users: await this._users.at(usersAddress),
      records: await this._records.at(recordsAddress),
      permissions: await this._permissions.at(permissionsAddress),
    };
  }

  /**
   * Get a record from Linnia by data hash
   * @param {String} dataHash hex-encoded data hash, 0x prefixed
   * @returns {Object}
   */
  async getRecord(dataHash) {
    const { records } = await this.getContractInstances();
    return _recordsFunctions.getRecord(records, dataHash);
  }

  /**
   * Get record attestation from Linnia
   * @param {String} dataHash hex-encoded data hash, 0x prefixed
   * @returns {Boolean} True if attested by specified user
   */
  async getAttestation(dataHash, attestatorAddress) {
    const { records } = await this.getContractInstances();
    return _recordsFunctions.getAttestation(records, dataHash, attestatorAddress);
  }

  /**
   * Get permission information of a record
   * @param {String} dataHash hex-encoded data hash, 0x prefixed
   * @param {String} viewerAddress hex-encoded ethereum address
   * @returns {Object}
   */
  async getPermission(dataHash, viewerAddress) {
    const { permissions } = await this.getContractInstances();
    return _permissionsFunctions.getPermission(permissions, dataHash, viewerAddress);
  }

  async _getHubInstance() {
    // get hub contract instance
    // look up address either from user defined address or artifact
    if (this._hubAddress) {
      return this._hub.at(this._hubAddress);
    }
    return this._hub.deployed();
  }

  /**
   * Deploy Linnia contracts, and construct the Linnia API that uses the newly
   *  deployed contracts.
   * @param {Object} web3 An instantiated web3 API object, configured to the
   *  network you want to deploy the contracts on
   * @param {Object} ipfs An instantiated ipfs API object, used by the created
   *  Linnia API
   * @param {?Object} opt Optional web3 transaction object
   * @returns {Promise<Linnia>} A Linnia API object using the deployed contracts
   */
  static async deploy(web3, ipfs, opt = {}) {
    const deployed = await _deploy(web3, opt);
    return new Linnia(web3, ipfs, {
      hubAddress: deployed.hubInstance.address,
    });
  }
}

Linnia.encoding = _encoding;
Linnia.util = _util;

export default Linnia;
