import ecies from 'eth-ecies';
import ethjsUtil from 'ethjs-util';
import { Buffer } from 'safe-buffer';

const toBuffer = (v) => {
  if (Buffer.isBuffer(v)) {
    return v;
  }
  if (typeof v !== 'string') {
    throw new Error('value must be string or buffer');
  }
  if (ethjsUtil.isHexString(v)) {
    return Buffer.from(ethjsUtil.padToEven(ethjsUtil.stripHexPrefix(v)), 'hex');
  }
  return Buffer.from(v);
};

/**
 * ECIES encrypt
 * @param {Buffer|String} pubKeyTo Ethereum pub key, 64 bytes
 * @param {Buffer|String} plaintext Plaintext to be encrypted
 * @param {?{?iv: Buffer, ?ephemPrivKey: Buffer}} opts
 * optional iv (16 bytes) and ephem key (32 bytes)
 * @returns {Buffer} Encrypted message, serialized, 113+ bytes
 */
const encrypt = (pubKeyTo, plaintext, opts) =>
  ecies.encrypt(toBuffer(pubKeyTo), toBuffer(plaintext), opts);

/**
 * ECIES decrypt
 * @param {Buffer|String} privKey Ethereum private key, 32 bytes
 * @param {Buffer|String} encrypted Encrypted message, serialized, 113+ bytes
 * @returns {Buffer} plaintext
 */
const decrypt = (privKey, encrypted) =>
  ecies.decrypt(toBuffer(privKey), toBuffer(encrypted));

export default {
  encrypt,
  decrypt,
};
