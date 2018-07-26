import TruffleContract from 'truffle-contract';

import LinniaHub from '@linniaprotocol/linnia-smart-contracts-july2017/build/contracts/LinniaHub.json';
import LinniaUsers from '@linniaprotocol/linnia-smart-contracts-july2017/build/contracts//LinniaUsers.json';
import LinniaRecords from '@linniaprotocol/linnia-smart-contracts-july2017/build/contracts//LinniaRecords.json';
import LinniaPermissions from '@linniaprotocol/linnia-smart-contracts-july2017/build/contracts//LinniaPermissions.json';

import _util from './util';

const deploy = async (web3, opt) => {
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

export default deploy;
