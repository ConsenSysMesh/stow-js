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
