import ecies from 'eth-ecies';
import { toBuffer } from 'ethereumjs-util';

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

const truffleHack = (contract) => {
  if (typeof contract.currentProvider.sendAsync !== 'function') {
    contract.currentProvider.sendAsync = function () {
      return contract.currentProvider.send.apply(contract.currentProvider, arguments);
    };
  }
  return contract;
};

export default {
  encrypt,
  decrypt,
  truffleHack,
};

