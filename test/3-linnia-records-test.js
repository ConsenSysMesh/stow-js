import { assert } from 'chai';
import Web3 from 'web3';
import Linnia from '../src';
import LinniaDeploy from './deployForTests';

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
const testDataHash = '0x276bc9ec8730ad53e827c0467c00473a53337e2cb4b61ada24760a217fb1ef14';
const testDataUri = 'QmbcfaK3bdpFTATifqXXLux4qx6CmgBUcd3fVMWxVszazP';
const testMetaData = 'Blood_Pressure';

describe('Linnia-records', async () => {
  const [admin, user, provider] = await web3.eth.getAccounts();
  let linnia;
  let contracts;
  let recordAddTime;
  beforeEach('deploy the contracts and set up roles', async () => {
    linnia = await LinniaDeploy.deploy(web3, null, {
      from: admin,
      gas: 4000000,
    });
    contracts = await linnia.getContractInstances();
    // add a user and a provider
    await contracts.users.register({ from: user });
    await contracts.users.register({ from: provider });
    await contracts.users.setProvenance(provider, 1, { from: admin });
    // append a file
    const tx = await contracts.records.addRecordByProvider(
      testDataHash,
      user,
      testMetaData,
      testDataUri,
      {
        from: provider,
        gas: 500000,
      },
    );
    const blockNumber = tx.receipt.blockNumber;
    const block = await web3.eth.getBlock(blockNumber);
    recordAddTime = block.timestamp;
  });
  describe('get record', () => {
    it('should return the formatted data record', async () => {
      const record = await linnia.getRecord(testDataHash);
      assert.equal(record.owner.toLowerCase(), user.toLowerCase());
      assert.equal(record.metadataHash, web3.utils.sha3(testMetaData));
      assert.equal(record.sigCount, 1);
      assert.equal(record.irisScore, 1);
      assert.equal(record.dataUri, testDataUri);
      assert.typeOf(record.timestamp, 'Date');
      assert.equal(record.timestamp.getTime() / 1000, recordAddTime);
    });
  });
  describe('get attestation', () => {
    it('should return true if attested by specified user', async () => {
      const att = await linnia.getAttestation(testDataHash, provider);
      assert.isTrue(att);
    });
    it('should return false if not attested by specified user', async () => {
      const att = await linnia.getAttestation(testDataHash, user);
      assert.isFalse(att);
    });
  });
});
