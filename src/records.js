const getRecord = async (recordsContract, dataHash) => {
  const res = await recordsContract.records.call(dataHash);
  const owner = res[0];
  const metadataHash = res[1];
  const sigCount = res[2];
  const irisScore = res[3];
  const dataUri = res[4];
  const timestamp = new Date(res[5] * 1000);
  return {
    owner,
    metadataHash,
    sigCount,
    irisScore,
    dataUri,
    timestamp,
  };
};

const addRecord = async (recordsContract, dataHash, metadata, dataUri, ethParams) => {
  // If metadata is not JSON
  if (typeof metadata !== 'object') {
    throw new Error('Metadata has to be a JSON object');
  }

  try {
    await recordsContract.addRecord(dataHash, JSON.stringify(metadata), dataUri, ethParams);
    return getRecord(recordsContract, dataHash);
  } catch (e) {
    if (e.message === 'sender account not recognized') {
      throw new Error('The web3 Instance that you pass to Linnia cannot sign a transaction for this address');
    } else {
      throw new Error('Something went wrong');
    }
  }
};

const signRecord = async (recordsContract, usersContract, dataHash, ethParams) => {
  // Check provenance of attestator
  const provenance = await usersContract.provenanceOf(ethParams.from);
  if (!(provenance > 0)) {
    throw new Error('The attestor does not have provenance (Invalid Attestator)');
  }

  // Check if attestator have signed the record already
  const sigExists = await recordsContract.sigExists(dataHash, ethParams.from);
  if (sigExists) {
    throw new Error('The attestor have already signed this record');
  }

  try {
    await recordsContract.addSigByProvider(dataHash, ethParams);
    return getRecord(recordsContract, dataHash);
  } catch (e) {
    if (e.message === 'sender account not recognized') {
      throw new Error('The web3 Instance that you pass to Linnia cannot sign a transaction for this address');
    } else {
      throw new Error('Something went wrong');
    }
  }
};

const getAttestation = async (
  recordsContract, dataHash, attestator,
) => recordsContract.sigExists.call(dataHash, attestator);

export default {
  getRecord,
  addRecord,
  getAttestation,
  signRecord,
};
