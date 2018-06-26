import { assert } from 'chai';
import Web3 from 'web3';
import Linnia from '../src';

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
const testDataHash = '0x276bc9ec8730ad53e827c0467c00473a53337e2cb4b61ada24760a217fb1ef14';
const testDataUri = 'QmbcfaK3bdpFTATifqXXLux4qx6CmgBUcd3fVMWxVszazP';
const testMetaData = 'Blood_Pressure';

describe('Linnia-records', () => {
  const [admin, patient, provider] = web3.eth.accounts;
  let linnia;
  let contracts;
  let recordAddTime;
  beforeEach('deploy the contracts and set up roles', async () => {
    linnia = await Linnia.deploy(web3, null, {
      from: admin,
      gas: 4000000,
    });
    contracts = await linnia.getContractInstances();
    // add a patient and a provider
    await contracts.users.register({ from: patient });
    await contracts.users.register({ from: provider });
    await contracts.users.setProvenance(provider, 1, { from: admin });
    // append a file
    const tx = await contracts.records.addRecordByProvider(
      testDataHash, patient, testMetaData,
      testDataUri, {
        from: provider,
        gas: 500000,
      },
    );
    recordAddTime = web3.eth.getBlock(tx.receipt.blockNumber).timestamp;
  });
  describe('get record', () => {
    it('should return the formatted data record', async () => {
      const record = await linnia.getRecord(testDataHash);
      assert.equal(record.owner, patient);
      assert.equal(record.metadataHash, web3.sha3(testMetaData));
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
      const att = await linnia.getAttestation(testDataHash, patient);
      assert.isFalse(att);
    });
  });
});
