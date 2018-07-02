import { assert } from 'chai';
import eutil from 'ethereumjs-util';
import Web3 from 'web3';
import Linnia from '../src';

describe('Linnia-deploy', () => {
  it('should deploy the contracts', async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    const accounts = await web3.eth.getAccounts();
    const linnia = await Linnia.deploy(web3, null, {
      from: accounts[0],
      gas: 4000000,
    });
    const {
      hub, users, records, permissions,
    } = await linnia.getContractInstances();
    // deployed contracts shouldn't have zero address
    assert.lengthOf(eutil.stripHexPrefix(hub.address), 40);
    assert.lengthOf(eutil.stripHexPrefix(users.address), 40);
    assert.lengthOf(eutil.stripHexPrefix(records.address), 40);
    assert.lengthOf(eutil.stripHexPrefix(permissions.address), 40);
  });
});
