import Attestation from './attestation';

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

const addRecordWithReward = async (
  recordsContract,
  usersContract,
  dataHash,
  metadata,
  dataUri,
  tokenAddress,
  ethParams) => {
  if (!tokenAddress) {
    throw new Error('tokenAddress not valid.  It is likely not set in linnia constructor');
  }

  // Check if there is from in the ethParams
  if (!ethParams.from) {
    throw new Error('ethParams object does not contain a "from" key');
  }

  // Check if the owner is a Linnia User
  const isUser = await usersContract.isUser(ethParams.from);
  if (!isUser) {
    throw new Error('the address is not registered in Linnia');
  }

  // If metadata is not JSON
  if (typeof metadata !== 'object') {
    throw new Error('Metadata has to be a JSON object');
  }

  try {
    await recordsContract.addRecordwithReward(dataHash, JSON.stringify(metadata), dataUri, tokenAddress, ethParams);
    return getRecord(recordsContract, dataHash);
  } catch (e) {
    if (e.message === 'sender account not recognized') {
      throw new Error('The web3 Instance that you pass to Linnia cannot sign a transaction for this address');
    } else {
      throw e;
    }
  }
};

const addRecord = async (
  recordsContract,
  usersContract,
  dataHash,
  metadata,
  dataUri,
  ethParams) => {
  // Check if there is from in the ethParams
  if (!ethParams.from) {
    throw new Error('ethParams object does not contain a "from" key');
  }

  // Check if the owner is a Linnia User
  const isUser = await usersContract.isUser(ethParams.from);
  if (!isUser) {
    throw new Error('the address is not registered in Linnia');
  }

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
      throw e;
    }
  }
};

const signRecord = async (recordsContract, usersContract, dataHash, ethParams) => {
  // Check if there is from in the ethParams
  if (!ethParams.from) {
    throw new Error('ethParams object does not contain a "from" key');
  }

  // Check if the owner is a Linnia User
  const isUser = await usersContract.isUser(ethParams.from);
  if (!isUser) {
    throw new Error('the address is not registered in Linnia');
  }

  // Check provenance of attestator
  const provenance = await usersContract.provenanceOf(ethParams.from);
  if (!(provenance > 0)) {
    throw new Error('The attestor does not have provenance (Invalid Attestator)');
  }

  // Check if record exists
  const record = await getRecord(recordsContract, dataHash);
  if (record.owner === '0x0000000000000000000000000000000000000000') {
    throw new Error('The record does not exists');
  }

  // Check if attestator have signed the record already
  const sigExists = await recordsContract.sigExists(dataHash, ethParams.from);
  if (sigExists) {
    throw new Error('The attestor have already signed this record');
  }

  try {
    await recordsContract.addSigByProvider(dataHash, ethParams);
    return new Attestation(ethParams.from, dataHash);
  } catch (e) {
    if (e.message === 'sender account not recognized') {
      throw new Error('The web3 Instance that you pass to Linnia cannot sign a transaction for this address');
    } else {
      throw e;
    }
  }
};

const getAttestation = async (
  recordsContract, dataHash, attestator,
) => recordsContract.sigExists.call(dataHash, attestator);

export default {
  getRecord,
  addRecord,
  addRecordWithReward,
  getAttestation,
  signRecord,
};
