import eutil from 'ethereumjs-util';
import _recordsFunctions from './records';
import _permissionsFunctions from './permissions';
import _util from './util';

class Record {
  constructor(
    contracts, dataHash, owner, metadataHash, sigCount, irisScore,
    dataUri, timestamp,
  ) {
    this.contracts = contracts;
    this.dataHash = dataHash;
    this.owner = owner;
    this.metadataHash = metadataHash;
    this.sigCount = sigCount;
    this.irisScore = irisScore;
    this.dataUri = dataUri;
    this.timestamp = timestamp;
  }

  /**
   * Get the attestation of the record from a specified attestator
   * @param {String} attestator Address of the attestator
   * @returns {Promise<Boolean>}
   */
  async getAttestation(attestator) {
    return _recordsFunctions.getAttestation(this.contracts.records, this.dataHash, attestator);
  }

  /**
   * Get the permission of the record for a viewer
   * @param {String} viewer Address of the viewer
   * @returns {Promise<{canAccess: Boolean, dataUri: String}>}
   */
  async getPermission(viewer) {
    return _permissionsFunctions.getPermission(this.contracts.permissions, this.dataHash, viewer);
  }

  /**
   * Gets the plaintext data of this record
   * @param {String} privKey Private key to decrypt the data
   * @param {Function} uriResolver Async function that takes a data URI string and returns the data
   * @returns {String} Plaintext data
   */
  async decryptData(privKey, uriResolver) {
    const ciphertext = await uriResolver(this.dataUri);
    const plaintext = _util.decrypt(privKey, ciphertext);
    // check hash
    if (!this.verifyData(plaintext)) {
      throw new Error('plaintext data hash mismatch');
    }
    return plaintext;
  }

  /**
   * Gets the plaintext data of a permissioned copy of the record
   * @param {String} viewer Address of the viewer
   * @param {String} privKey Private key to decrypt the data
   * @param {Function} uriResolver Async function that takes a data URI string and returns the data
   * @returns {String} Plaintext data
   */
  async decryptPermissioned(viewer, privKey, uriResolver) {
    // get the permissioned data URI
    const perm = await this.getPermission(viewer);
    if (!perm.canAccess) {
      throw new Error('viewer has no permission to view the data');
    }
    const ciphertext = await uriResolver(perm.dataUri);
    const plaintext = _util.decrypt(privKey, ciphertext);
    if (!this.verifyData(plaintext)) {
      throw new Error('plaintext data hash mismatch');
    }
    return plaintext;
  }

  /**
   * Verifies data against the data hash in Linnia
   * @param {Buffer|String} plaintext Plaintext data to be verified
   * @returns {Boolean} True if data hash matches
   */
  verifyData(plaintext) {
    return eutil.bufferToHex(eutil.keccak256(plaintext)) === this.dataHash;
  }

  /**
   * Re-encrypts the data to another public key
   * @param {String} pubKey Public key to re-encrypt the data to
   * @param {String} privKey Private key to decrypt the record data
   * @param {Function} uriResolver Async function that takes a data URI string and returns the data
   * @returns {String} Re-encrypted data
   */
  async reencryptData(pubKey, privKey, uriResolver) {
    const plaintext = await this.decryptData(privKey, uriResolver);
    const encryptedData = _util.encrypt(pubKey, plaintext);
    return encryptedData;
  }

  static async fromContract(recordsContract, permissionsContract, dataHash) {
    const r = await _recordsFunctions.getRecord(recordsContract, dataHash);
    const contracts = {
      records: recordsContract,
      permissions: permissionsContract,
    };
    return new Record(
      contracts, dataHash, r.owner, r.metadataHash,
      r.sigCount, r.irisScore, r.dataUri, r.timestamp,
    );
  }
}

export default Record;
