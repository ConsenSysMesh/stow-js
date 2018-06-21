import _recordsFunctions from './records';
import _permissionsFunctions from './permissions';

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
