const getPermission = async (contract, dataHash, viewer) => {
  const res = await contract.permissions.call(dataHash, viewer);
  return {
    canAccess: res[0],
    dataUri: res[1],
  };
};

export default {
  getPermission,
};
