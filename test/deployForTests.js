import TruffleContract from 'truffle-contract';

import LinniaHub from '@linniaprotocol/linnia-smart-contracts/build/contracts/LinniaHub.json';
import LinniaUsers from '@linniaprotocol/linnia-smart-contracts/build/contracts/LinniaUsers.json';
import LinniaRecords from '@linniaprotocol/linnia-smart-contracts/build/contracts/LinniaRecords.json';
import LinniaPermissions from '@linniaprotocol/linnia-smart-contracts/build/contracts/LinniaPermissions.json';
import Linnia from '../src';

import _util from '../src/util';

const _deploy = async (web3, opt) => {
  if (web3 === undefined) {
    throw Error('web3 is undefined!');
  }

  const _hub = TruffleContract(LinniaHub);
  const _users = TruffleContract(LinniaUsers);
  const _records = TruffleContract(LinniaRecords);
  const _permissions = TruffleContract(LinniaPermissions);

  _hub.setProvider(web3.currentProvider);
  _users.setProvider(web3.currentProvider);
  _records.setProvider(web3.currentProvider);
  _permissions.setProvider(web3.currentProvider);

  const hub = _util.truffleHack(_hub);
  const users = _util.truffleHack(_users);
  const records = _util.truffleHack(_records);
  const permissions = _util.truffleHack(_permissions);
  // deploy the hub
  const hubInstance = await hub.new(opt);
  // deploy Users
  const usersInstance = await users.new(hubInstance.address, opt);
  // deply records
  const recordsInstance = await records.new(hubInstance.address, opt);
  // deploy permissions
  const permissionsInstace = await permissions.new(hubInstance.address, opt);
  // set all addresses in hub
  await hubInstance.setUsersContract(usersInstance.address, opt);
  await hubInstance.setRecordsContract(recordsInstance.address, opt);
  await hubInstance.setPermissionsContract(permissionsInstace.address, opt);
  return {
    hubInstance,
    usersInstance,
    recordsInstance,
    permissionsInstace,
  };
};

/**
-   * Deploy Linnia contracts, and construct the Linnia API that uses the newly
-   *  deployed contracts.
-   * @param {Object} web3 An instantiated web3 API object, configured to the
-   *  network you want to deploy the contracts on
-   * @param {?Object} opt Optional web3 transaction object
-   * @returns {Promise<Linnia>} A Linnia API object using the deployed contracts
*/

class LinniaDeploy {
  static async deploy(web3, opt = {}) {
    const deployed = await _deploy(web3, opt);
    return new Linnia(web3, {
      linniaContractUpgradeHubAddress: deployed.hubInstance.address,
    });
  }
}

export default LinniaDeploy;
