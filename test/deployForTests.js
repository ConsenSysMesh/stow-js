import TruffleContract from 'truffle-contract';

import StowHub from '@linniaprotocol/linnia-smart-contracts/build/contracts/LinniaHub.json';
import StowUsers from '@linniaprotocol/linnia-smart-contracts/build/contracts/LinniaUsers.json';
import StowRecords from '@linniaprotocol/linnia-smart-contracts/build/contracts/LinniaRecords.json';
import StowPermissions from '@linniaprotocol/linnia-smart-contracts/build/contracts/LinniaPermissions.json';
import MockToken from '@linniaprotocol/linnia-smart-contracts/build/contracts/ERC20Mock.json';

import Stow from '../src';

import _util from '../src/util';

const testDeploy = async (web3, opt) => {
  if (web3 === undefined) {
    throw Error('web3 is undefined!');
  }

  const hubTemp = TruffleContract(StowHub);
  const usersTemp = TruffleContract(StowUsers);
  const recordsTemp = TruffleContract(StowRecords);
  const permissionsTemp = TruffleContract(StowPermissions);
  const mockTokenTemp = TruffleContract(MockToken);

  hubTemp.setProvider(web3.currentProvider);
  usersTemp.setProvider(web3.currentProvider);
  recordsTemp.setProvider(web3.currentProvider);
  permissionsTemp.setProvider(web3.currentProvider);
  mockTokenTemp.setProvider(web3.currentProvider);

  const hub = _util.truffleHack(hubTemp);
  const users = _util.truffleHack(usersTemp);
  const records = _util.truffleHack(recordsTemp);
  const permissions = _util.truffleHack(permissionsTemp);
  const mockToken = _util.truffleHack(mockTokenTemp);

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

  // deploy mockToken
  const tokenInstance = await mockToken.new(opt);
  await tokenInstance.unpause(opt);
  await tokenInstance.transfer(recordsInstance.address, web3.utils.toWei('1000', 'finney'), opt);
  return {
    hubInstance,
    usersInstance,
    recordsInstance,
    permissionsInstace,
    tokenInstance,
  };
};

/**
-   * Deploy Stow contracts, and construct the Stow API that uses the newly
-   *  deployed contracts.
-   * @param {Object} web3 An instantiated web3 API object, configured to the
-   *  network you want to deploy the contracts on
-   * @param {?Object} opt Optional web3 transaction object
-   * @returns {Promise<Stow>} A Stow API object using the deployed contracts
*/

class StowDeploy {
  static async deploy(web3, opt = {}) {
    const deployed = await testDeploy(web3, opt);
    return new Stow(web3, {
      hubAddress: deployed.hubInstance.address,
      tokenAddress: deployed.tokenInstance.address,
    });
  }
}

export default StowDeploy;
