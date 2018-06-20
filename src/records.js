const getRecord = async (contract, dataHash) => {
  const res = await contract.records.call(dataHash);
  return {
    owner: res[0],
    metadataHash: res[1],
    sigCount: res[2],
    irisScore: res[3],
    dataUri: res[4],
    timestamp: new Date(res[5] * 1000),
  };
};

const getAttestation = (contract, dataHash, attestator) =>
  contract.sigExists.call(dataHash, attestator);

export default {
  getRecord,
  getAttestation,
};
