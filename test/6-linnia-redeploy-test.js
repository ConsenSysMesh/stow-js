import { assert } from 'chai';
import eutil from 'ethereumjs-util';
import Web3 from 'web3';
import Linnia from '../src';

describe('Linnia-redeploy', () => {
  it('should redeploy the records contract', async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    const accounts = await web3.eth.getAccounts();
    const linnia = await Linnia.deploy(web3, null, {
      from: accounts[0],
      gas: 4000000,
    });
    var {
      hub, users, records, permissions,
    } = await linnia.getContractInstances();

    // Old addresses
    const oldHub = hub.address
    const oldUsers = users.address
    const oldRecords = records.address
    const oldPermissions = permissions.address

    const newRecords = await linnia.redeployLinniaRecords({
      from: accounts[0],
      gas: 5000000,
    })
    var { hub, users, records, permissions } = await linnia.getContractInstances()

    // all contracts should mantain the same address except the records
    assert.equal(hub.address, oldHub);
    assert.equal(users.address, oldUsers);
    assert.equal(newRecords.address, records.address);
    assert.notEqual(records.address, oldRecords);
    assert.equal(permissions.address, oldPermissions);
  });

  it('should redeploy the users contract', async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    const accounts = await web3.eth.getAccounts();
    const linnia = await Linnia.deploy(web3, null, {
      from: accounts[0],
      gas: 4000000,
    });
    var {
      hub, users, records, permissions,
    } = await linnia.getContractInstances();

    // Old addresses
    const oldHub = hub.address
    const oldUsers = users.address
    const oldRecords = records.address
    const oldPermissions = permissions.address

    const newUsers = await linnia.redeployLinniaUsers({
      from: accounts[0],
      gas: 5000000,
    })
    var { hub, users, records, permissions } = await linnia.getContractInstances()

    // all contracts should mantain the same address except the users
    assert.equal(hub.address, oldHub);
    assert.equal(newUsers.address, users.address);
    assert.notEqual(users.address, oldUsers);
    assert.equal(records.address, oldRecords);
    assert.equal(permissions.address, oldPermissions);
  });
});
