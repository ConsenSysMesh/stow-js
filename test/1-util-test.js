import { assert } from 'chai';
import Linnia from '../src';

// real ipfs hashes
const ipfsHash = 'QmUMqi1rr4Ad1eZ3ctsRUEmqK2U3CyZqpetUe51LB9GiAM';
const hash = '0x59742369c54039d5611d84452aa6c31b72da336b76ed4029b12c3dc5479836ba';

describe('Encoding', () => {
  describe('encode', () => {
    it('should convert a sha2-256 hash to IPFS hash correctly', () => {
      assert.equal(Linnia.encoding.hexStringToIpfsHash(hash), ipfsHash);
    });
    it('should work with non 0x prefixed hashes too', () => {
      assert.equal(Linnia.encoding.hexStringToIpfsHash(hash.slice(2)), ipfsHash);
    });
  });
  describe('decode', () => {
    it('should convert an IPFS hash to sha2-256 hash correctly', () => {
      assert.equal(Linnia.encoding.ipfsHashToHexString(ipfsHash), hash);
    });
  });
});

describe('ECIES', () => {
  const privKey1 = '5230a384e9d271d59a05a9d9f94b79cd98fcdcee488d1047c59057046e128d2b';
  const pubKey1 = 'b1f26f98d374540eac3d31208f13a3935318e228207084c9ee32d741ff1ad2341af4ac9658aba4a254bf1dc6451b3c08524febba5273bec227c73e25cd376387';
  describe('roundtrip', () => {
    it('should encrypt and decrypt a string, using hex-encoded keys', () => {
      const data = 'foo';
      const ct = Linnia.util.encrypt(`0x${pubKey1}`, data);
      const pt = Linnia.util.decrypt(`0x${privKey1}`, ct).toString();
      assert.equal(pt, data);
    });
    it('should encrypt and decrypt a buffer, using keys in buffers', () => {
      const data = Buffer.from('foo');
      const ct = Linnia.util.encrypt(Buffer.from(pubKey1, 'hex'), data);
      const pt = Linnia.util.decrypt(Buffer.from(privKey1, 'hex'), ct);
      assert.deepEqual(pt, data);
    });
  });
});
