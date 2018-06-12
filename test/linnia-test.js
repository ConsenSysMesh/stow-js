import { assert } from 'chai';
import ethjs from 'ethjs-util';
import Web3 from 'web3';
import Linnia from '../src';

describe('Linnia', () => {
  describe('deploy', () => {
    it('should deploy the contracts', async () => {
      const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
      const linnia = await Linnia.deploy(web3, null, {
        from: web3.eth.accounts[0],
        gas: 4000000,
      });
      const {
        hub, users, records, permissions,
      } = await linnia.getContractInstances();
      // deployed contracts shouldn't have zero address
      assert.lengthOf(ethjs.stripHexPrefix(hub.address), 40);
      assert.lengthOf(ethjs.stripHexPrefix(users.address), 40);
      assert.lengthOf(ethjs.stripHexPrefix(records.address), 40);
      assert.lengthOf(ethjs.stripHexPrefix(permissions.address), 40);
    });
  });
});
