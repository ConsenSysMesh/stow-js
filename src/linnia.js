import TruffleContract from 'truffle-contract';

import LinniaContractUpgradeHub from '@linniaprotocol/linnia-smart-contracts/build/contracts//LinniaHub.json';
import LinniaUsers from '@linniaprotocol/linnia-smart-contracts/build/contracts//LinniaUsers.json';
import LinniaRecords from '@linniaprotocol/linnia-smart-contracts/build/contracts//LinniaRecords.json';
import LinniaPermissions from '@linniaprotocol/linnia-smart-contracts/build/contracts//LinniaPermissions.json';

import Record from './record';
import _recordsFunctions from './records';
import _permissionsFunctions from './permissions';
import _util from './util';

/**
 * Linnia API object
 */
class Linnia {
  /**
   * Create a new Linnia API object
   * @param {Object} web3 An instantiated web3 API object
   * @param {?{?linniaContractUpgradeHubAddress: String}} opt Optional constructor options
   * @returns {Linnia} Created Linnia API object
   */
  constructor(web3, opt = {}) {
    this.web3 = web3;
    // truffle contracts
    const _hub = TruffleContract(LinniaContractUpgradeHub);
    const _users = TruffleContract(LinniaUsers);
    const _records = TruffleContract(LinniaRecords);
    const _permissions = TruffleContract(LinniaPermissions);
    _hub.setProvider(web3.currentProvider);
    _users.setProvider(web3.currentProvider);
    _records.setProvider(web3.currentProvider);
    _permissions.setProvider(web3.currentProvider);
    this._hub = _util.truffleHack(_hub);
    this._users = _util.truffleHack(_users);
    this._records = _util.truffleHack(_records);
    this._permissions = _util.truffleHack(_permissions);
    // set linniaContractUpgradeHubAddress address
    if (opt.linniaContractUpgradeHubAddress) {
      // using user defined address
      this._hubAddress = opt.linniaContractUpgradeHubAddress;
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
      _linniaContractUpgradeHub: hubInstance,
      users: await this._users.at(usersAddress),
      records: await this._records.at(recordsAddress),
      permissions: await this._permissions.at(permissionsAddress),
    };
  }

  /**
   * Get a record from Linnia by data hash
   * @param {String} dataHash hex-encoded data hash, 0x prefixed
   * @returns {Promise<Record>}
   */
  async getRecord(dataHash) {
    const { records, permissions } = await this.getContractInstances();
    return Record.fromContract(records, permissions, dataHash);
  }

  /**
   * Add a record from Linnia by data hash
   * @param {String} dataHash hash of the plain text data + metadata
   * @param {Object} metadata public information about the data
   * @param {String} dataUri link to the data (eg. the IPFS hash)
   * @param {Object} ethParams ethereum account params
   * @returns {Promise<Record>}
   */
  async addRecord(dataHash, metadata, dataUri, ethParams) {
    const { records } = await this.getContractInstances();
    return _recordsFunctions.addRecord(records, dataHash, metadata, dataUri, ethParams);
  }

  /**
    * Get record attestation from Linnia
    * @param {String} dataHash hex-encoded data hash, 0x prefixed
    * @returns {Promise<Boolean>} True if attested by specified user
   */
  async getAttestation(dataHash, attestatorAddress) {
    const { records } = await this.getContractInstances();
    return _recordsFunctions.getAttestation(records, dataHash, attestatorAddress);
  }

  /**
   * Sign a record (add attestation)
   * @param {String} dataHash hex-encoded data hash, 0x prefixed
   * @param {Object} ethParams ethereum account params
   * @returns {Promise<Record>}
   */
  async signRecord(dataHash, ethParams) {
    const { records, users } = await this.getContractInstances();
    return _recordsFunctions.signRecord(records, users, dataHash, ethParams);
  }

  /**
   * Get permission information of a record
   * @param {String} dataHash hex-encoded data hash, 0x prefixed
   * @param {String} viewerAddress hex-encoded ethereum address
   * @returns {Promise<{canAccess: Boolean, dataUri: String}>}
   */
  async getPermission(dataHash, viewerAddress) {
    const { permissions } = await this.getContractInstances();
    return _permissionsFunctions.getPermission(permissions, dataHash, viewerAddress);
  }

  /**
   * Internal DO NOT USE
   * @returns {Promise<*>}
   * @private
   */
  async _getHubInstance() {
    // get linniaContractUpgradeHubAddress contract instance
    // look up address either from user defined address or artifact
    if (this._hubAddress) {
      return this._hub.at(this._hubAddress);
    }
    return this._hub.deployed();
  }
}

Linnia.util = _util;

export default Linnia;
