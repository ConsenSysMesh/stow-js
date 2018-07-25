import EthCrypto from 'eth-crypto';
import { toBuffer } from 'ethereumjs-util';

// TODO: Add @param version to the encrypt and decrypt functions for version control
// Check this: https://github.com/MetaMask/eth-sig-util/pull/18#issuecomment-384399986

/**
 * ECIES encrypt
 * @param {Buffer|String} pubKeyTo Ethereum pub key, 64 bytes
 * @param {Buffer|String} plaintext Plaintext to be encrypted
 * optional iv (16 bytes) and ephem key (32 bytes)
 * @returns {Buffer} Encrypted message, serialized, 113+ bytes
 */
const encrypt = async (pubKeyTo, plaintext) => {
  const hexPubKeyString = pubKeyTo.toString('hex');
  const hexPubKey = hexPubKeyString.substr(0, 2) === '0x' ? hexPubKeyString.toString('hex').substr(2) : hexPubKeyString.toString('hex');

  const payload = {
    message: plaintext,
  };
  const encrypted = await EthCrypto.encryptWithPublicKey(hexPubKey, JSON.stringify(payload));
  return EthCrypto.cipher.stringify(encrypted);
};

/**
 * ECIES decrypt
 * @param {Buffer|String} privKey Ethereum private key, 32 bytes
 * @param {Buffer|String} encrypted Encrypted message, serialized, 113+ bytes
 * @returns {Buffer} plaintext
 */
const decrypt = async (privKey, encrypted) => {
  const hexPrivKeyString = privKey.toString('hex');
  const hexPrivKey = hexPrivKeyString.substr(0, 2) === '0x' ? hexPrivKeyString : `0x${hexPrivKeyString}`;

  const encryptedObject = EthCrypto.cipher.parse(encrypted);
  const decrypted = await EthCrypto.decryptWithPrivateKey(
    hexPrivKey,
    encryptedObject,
  );
  const decryptedPayload = JSON.parse(decrypted);
  return decryptedPayload.message;
};

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

