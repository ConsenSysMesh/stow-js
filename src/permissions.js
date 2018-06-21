const getPermission = async (permissionsContract, dataHash, viewer) => {
  const res = await permissionsContract.permissions.call(dataHash, viewer);
  return {
    canAccess: res[0],
    dataUri: res[1],
  };
};

export default {
  getPermission,
};
