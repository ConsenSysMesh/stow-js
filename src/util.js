const {Buffer} = require('buffer');
const nacl = require('tweetnacl');
nacl.util = require('tweetnacl-util');

/**
 * EIP 1098 (https://github.com/ethereum/EIPs/pull/1098)
 * Generate Keys
 * @returns {JSON} with publicKey and privateKey
 */
const genKeyPair = () => {
  const keys = nacl.box.keyPair();
  return {
    privateKey: nacl.util.encodeBase64(keys.secretKey),
    publicKey: nacl.util.encodeBase64(keys.publicKey),
  };
};

/**
 * EIP 1098 (https://github.com/ethereum/EIPs/pull/1098)
 * Encrypt
 * @param {String} pubKeyTo
 * @param {JSON} data Data to be encrypted (Has to be JSON Object)
 * @returns {JSON} Encrypted message
 */
const encrypt = (pubKeyTo, data) => {
  const receiverPublicKey = nacl.util.decodeBase64(pubKeyTo);

  if (!data) {
    throw new Error('Cannot encrypt empty data');
  }

  if (typeof data === 'object' && data.toJSON) {
    // remove toJSON attack vector
    // TODO, remove to all possible children
    throw new Error('Cannot encrypt with toJSON property.  Please remove toJSON property');
  }

  // add padding
  const dataWithPadding = {
    data,
    padding: '',
  };
  // calculate padding
  const dataLength = Buffer.byteLength(JSON.stringify(dataWithPadding), 'utf-8');
  let padLength = (2 ** 11) - (dataLength % (2 ** 11));
  padLength -= 16; // nacl extra bytes
  dataWithPadding.padding = '0'.repeat(padLength);

  // generate ephemeral keypair
  const ephemeralKeyPair = nacl.box.keyPair();

  const msgParamsUInt8Array = nacl.util.decodeUTF8(JSON.stringify(dataWithPadding));
  const nonce = nacl.randomBytes(nacl.box.nonceLength);

  // encrypt
  const encryptedMessage = nacl.box(
    msgParamsUInt8Array,
    nonce,
    receiverPublicKey,
    ephemeralKeyPair.secretKey,
  );

  // handle encrypted data
  const output = {
    version: 'x25519-xsalsa20-poly1305',
    nonce: nacl.util.encodeBase64(nonce),
    ephemPublicKey: nacl.util.encodeBase64(ephemeralKeyPair.publicKey),
    ciphertext: nacl.util.encodeBase64(encryptedMessage),
  };

  return output;
};

/**
 * EIP 1098 (https://github.com/ethereum/EIPs/pull/1098)
 * Decrypt
 * @param {String} privKey
 * @param {String} encrypted Encrypted message
 * @returns {String} plaintext
 */
const decrypt = (privKey, encrypted) => {
  const encryptionPrivateKey = nacl.util.decodeBase64(privKey);

  // assemble decryption parameters
  const nonce = nacl.util.decodeBase64(encrypted.nonce);
  const ciphertext = nacl.util.decodeBase64(encrypted.ciphertext);
  const ephemPublicKey = nacl.util.decodeBase64(encrypted.ephemPublicKey);

  // decrypt
  const decryptedMessage = nacl.box.open(ciphertext, nonce, ephemPublicKey, encryptionPrivateKey);

  let output;

  // return decrypted msg data
  try {
    output = nacl.util.encodeUTF8(decryptedMessage);
  } catch (err) {
    throw new Error('Decryption failed.');
  }

  if (output) {
    return JSON.parse(output).data;
  }
  throw new Error('Decryption failed.');
};

/* eslint-disable */

const truffleHack = (contract) => {
  if (typeof contract.currentProvider.sendAsync !== 'function') {
    contract.currentProvider.sendAsync = function () {
      return contract.currentProvider.send.apply(contract.currentProvider, arguments);
    };
  }
  return contract;
};

/* eslint-enable */

export default {
  genKeyPair,
  encrypt,
  decrypt,
  truffleHack,
};
