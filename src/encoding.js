import bs58 from 'bs58';
import ethjsUtil from 'ethjs-util';

// XXX
// Remove from lib once URI schema is changed

/**
 * Convert a hex-encoded sha2-256 hash to IPFS hash
 * @param {string} hash hex-encoded sha2-256 hash
 * @returns {string} bs58 encoded IPFS multihash
 */
const hexStringToIpfsHash = hash =>
  bs58.encode(Buffer.concat([
    Buffer.from('1220', 'hex'),
    Buffer.from(ethjsUtil.stripHexPrefix(hash), 'hex'),
  ]));

/**
 * Convert a bs58 encoded IPFS hash to hex-encoded sha2-256
 * @param {string} ipfsHash bs58 encoded IPFS multihash
 * @returns {string} hex-encoded sha2-256 hash. 0x prefixed
 */
const ipfsHashToHexString = ipfsHash =>
  // remove the first 2 bytes (0x1220) in the multihash
  `0x${bs58.decode(ipfsHash).slice(2).toString('hex')}`;

export default {
  hexStringToIpfsHash,
  ipfsHashToHexString,
};
