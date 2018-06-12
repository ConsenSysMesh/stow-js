import TruffleContract from 'truffle-contract';

import LinniaHub from './contracts/LinniaHub';
import LinniaUsers from './contracts/LinniaUsers';
import LinniaRecords from './contracts/LinniaRecords';
import LinniaPermissions from './contracts/LinniaPermissions';

import _deploy from './deploy';

/**
 * Optional constructor params
 * @typedef {Object} LinniaConstructorOpts
 * @property {?string} hubAddress Hub contract address, hex formatted
 */

/**
 * Linnia contract instances
 * @typedef {Object} LinniaContractInstances
 * @property {Object} hubInstance
 * @property {Object} usersInstance
 * @property {Object} recordsInstance
 * @property {Object} permissionsInstance
 */

/**
 * Linnia API object
 * @typedef {Object} Linnia
 * @property {Object} web3
 * @property {Object} ipfs
 */
export default class Linnia {
  /**
   * Create a new Linnia API object
   * @param {Object} web3 An instantiated web3 API object
   * @param {Object} ipfs An instantiated ipfs API object
   * @param {?LinniaConstructorOpts} opts Optional constructor options
   * @returns {Linnia} Created Linnia API object
   */
  constructor(web3, ipfs, opts = {}) {
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
    if (opts.hubAddress) {
      // using user defined address
      this._hubAddress = opts.hubAddress;
    }
  }

  /**
   * Get Linnia contract instances, wrapped in truffle contract
   * @returns {Promise<LinniaContractInstances>}
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
   * Deploy Linnia contracts, and construct the Linnia API that uses the newly
   *  deployed contracts.
   * @param {Object} web3 An instantiated web3 API object, configured to the
   *  network you want to deploy the contracts on
   * @param {Object} ipfs An instantiated ipfs API object, used by the created
   *  Linnia API
   * @param {?Object} opt Optional web3 transaction object
   * @returns {Promise<Linnia>} A Linnia API object using the deployed
   *  contracts
   */
  static async deploy(web3, ipfs, opt = {}) {
    const deployed = await _deploy(web3, opt);
    return new Linnia(web3, ipfs, {
      hubAddress: deployed.hubInstance.address,
    });
  }

  async _getHubInstance() {
    // get hub contract instance
    // look up address either from user defined address or artifact
    if (this._hubAddress) {
      return this._hub.at(this._hubAddress);
    }
    return this._hub.deployed();
  }
}
