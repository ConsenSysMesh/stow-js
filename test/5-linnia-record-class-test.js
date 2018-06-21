import { assert } from 'chai';
import Web3 from 'web3';
import Linnia from '../src';

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
const testDataHash = '0x276bc9ec8730ad53e827c0467c00473a53337e2cb4b61ada24760a217fb1ef14';
// TODO: replace this with non-raw string like
// /ipfs/QmUMqi1rr4Ad1eZ3ctsRUEmqK2U3CyZqpetUe51LB9GiAM
// when contract artifacts are updated
const testDataUri = '0x59742369c54039d5611d84452aa6c31b72da336b76ed4029b12c3dc5479836ba';
const testMetaData = 'Blood_Pressure';
const testSharedUri = '0xde1f76340a34698d41d362010bbc3c05c26f25d659904ef08ef7bd5eac0dbea4';

describe('Record class', () => {
  const [admin, user1, user2, user3, provider] = web3.eth.accounts;
  let linnia;
  let contracts;
  beforeEach('deploy the contracts and set up roles', async () => {
    linnia = await Linnia.deploy(web3, null, {
      from: admin,
      gas: 4000000,
    });
    contracts = await linnia.getContractInstances();
    await contracts.users.register({ from: user1 });
    await contracts.users.register({ from: user2 });
    await contracts.users.register({ from: provider });
    await contracts.users.setProvenance(provider, 1, { from: admin });
    // append a signed file
    await contracts.records.addRecordByProvider(
      testDataHash, user1, testMetaData,
      testDataUri, {
        from: provider,
        gas: 500000,
      },
    );
    // share the file with user2
    await contracts.permissions.grantAccess(testDataHash, user2, testSharedUri, {
      from: user1,
    });
  });
  describe('get attestation', () => {
    it('should return true if attested by specified user', async () => {
      const record = await linnia.getRecord(testDataHash);
      const at = await record.getAttestation(provider);
      assert.isTrue(at);
    });
    it('should return false if not attested by specified user', async () => {
      const record = await linnia.getRecord(testDataHash);
      const at = await record.getAttestation(user2);
      assert.isFalse(at);
    });
  });
  describe('get permission', () => {
    it('should return true if viewer has permission', async () => {
      const record = await linnia.getRecord(testDataHash);
      const perm = await record.getPermission(user2);
      assert.isTrue(perm.canAccess);
      assert.equal(perm.dataUri, testSharedUri);
    });
    it('should return false if viewer does not have permission', async () => {
      const record = await linnia.getRecord(testDataHash);
      const perm = await record.getPermission(user3);
      assert.isFalse(perm.canAccess);
      // XXX
      assert.equal(perm.dataUri, `0x${'00'.repeat(32)}`);
    });
  });
});
