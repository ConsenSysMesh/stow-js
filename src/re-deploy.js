import TruffleContract from 'truffle-contract';

import _util from './util';

const redeploy = async (web3, opt, hub, contract) => {
  if (web3 === undefined) {
    throw Error('web3 is undefined!');
  }
  
  const _contract = TruffleContract(contract);
  _contract.setProvider(web3.currentProvider);
  const contractUtil = _util.truffleHack(_contract)

  // deploy contract
  const contractInstance = await contractUtil.new(hub.address, opt);

  // set contract address in hub
  switch(contract.contractName) {
    case "LinniaUsers":
        await hub.setUsersContract(contractInstance.address, opt);
        break;
    case "LinniaRecords":
        await hub.setRecordsContract(contractInstance.address, opt);
        break;
    case "LinniaPermissions":
        await hub.setPermissionsContract(contractInstance.address, opt);
        break;
  }

};

export default redeploy;
