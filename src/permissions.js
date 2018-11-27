import _util from './util';

const getPermission = async (permissionsContract, dataHash, viewer) => {
  const res = await permissionsContract.permissions.call(dataHash, viewer);
  return {
    canAccess: res[0],
    dataUri: res[1],
  };
};

const grantPermission = async (recordsContract, permissionsContract, ipfs, dataHash, viewerEthereumAddress, viewerEncyptionPublicKey, ownerEncryptionPrivateKey) => {
  let file, decryptedData, reencrypted, IPFSDataUri;

  // Get the record from the blockchain
  const record = await recordsContract.getRecord(dataHash);

  if (!record.dataHash) {
     throw new Error('Unable to retreive record. Does a record with that dataHash exist?');
    return;
  }
  // Pull the owner encrypted record down from ipfs
  try {
    file = await new Promise((resolve, reject) => {
      ipfs.cat(record.dataUri, (err, ipfsRed) => {
        err ? reject(err) : resolve(ipfsRed);
      });
    });

  } catch (e) {
     throw new Error('Unable to pull file from storage. Does record have valid dataUri?');
    return;
  }

  // Decrypt the file using the owner's private key
  try {
    const encryptedData = JSON.parse(file);
    decryptedData = await util.decrypt(ownerEncryptionPrivateKey, encryptedData);
  } catch (e) {
     throw new Error('Unable to decrypt file. Is the owner private key correct?');
    return;
  }

  // Re-encrypt the file using the viewer's public key
  try {
    reencrypted = await util.encrypt(viewerEncyptionPublicKey, decryptedData);
  } catch (e) {
     throw new Error('Unable to encrypt file for viewer. Is the viewer public key correct?');
    return;
  }

  // Upload the viewer encrypted file up to a new location in IPFS
  try {
    IPFSDataUri = await new Promise((resolve, reject) => {
      ipfs.add(JSON.stringify(reencrypted), (err, ipfsRed) => {
        err ? reject(err) : resolve(ipfsRed);
      });
    });

  } catch (e) {
     throw new Error('Unable to reupload viewer file. Please try again later.');
    return;
  }

  if(!IPFSDataUri) {
     throw new Error('IPFS URI is not valid, please check ipfs setup');
  }

  // Create a new permissions record on the blockchain
  try {
    await permissionsContract.grantAccess(dataHash, viewerEthereumAddress, IPFSDataUri);
  } catch (e) {
    console.error(e);
     throw new Error('Transaction to ethereum network failed! Please check your console for errors.');
    return;
  }

  return {
    viewerEthereumAddress,
    IPFSDataUri,
    dataHash
  };

 }

export default {
  getPermission,
  grantPermission
};
