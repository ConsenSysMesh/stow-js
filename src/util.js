import EthCrypto from 'eth-crypto';
import { toBuffer } from 'ethereumjs-util';

/**
 * ECIES encrypt
 * @param {Buffer|String} pubKeyTo Ethereum pub key, 64 bytes
 * @param {Buffer|String} plaintext Plaintext to be encrypted
 * optional iv (16 bytes) and ephem key (32 bytes)
 * @returns {Buffer} Encrypted message, serialized, 113+ bytes
 */
const encrypt = async (pubKeyTo, plaintext) => {
  pubKeyTo = pubKeyTo.toString('hex')
  if(pubKeyTo.substr(0,2) === '0x'){
    pubKeyTo = pubKeyTo.substr(2)
  }
  const payload = {
      message: plaintext
  };
  const encrypted = await EthCrypto.encryptWithPublicKey(pubKeyTo, JSON.stringify(payload));
  return EthCrypto.cipher.stringify(encrypted);
}

/**
 * ECIES decrypt
 * @param {Buffer|String} privKey Ethereum private key, 32 bytes
 * @param {Buffer|String} encrypted Encrypted message, serialized, 113+ bytes
 * @returns {Buffer} plaintext
 */
const decrypt = async (privKey, encrypted) => {
  privKey = privKey.toString('hex')
  if(privKey.substr(0,2) !== '0x'){
    privKey = '0x'+privKey
  }
  const encryptedObject = EthCrypto.cipher.parse(encrypted);
  const decrypted = await EthCrypto.decryptWithPrivateKey(
    privKey,
    encryptedObject
  );
  const decryptedPayload = JSON.parse(decrypted);
  return decryptedPayload.message
}

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

