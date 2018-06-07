import TruffleContract from 'truffle-contract';

import LinniaHub from './contracts/LinniaHub';
import LinniaUsers from './contracts/LinniaUsers';
import LinniaRecords from './contracts/LinniaRecords';
import LinniaPermissions from './contracts/LinniaPermissions';

const deploy = async (web3, opt) => {
  if (web3 === undefined) {
    throw Error('web3 is undefined!');
  }
  const hub = TruffleContract(LinniaHub);
  const users = TruffleContract(LinniaUsers);
  const records = TruffleContract(LinniaRecords);
  const permissions = TruffleContract(LinniaPermissions);
  hub.setProvider(web3.currentProvider);
  users.setProvider(web3.currentProvider);
  records.setProvider(web3.currentProvider);
  permissions.setProvider(web3.currentProvider);
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
