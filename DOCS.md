Linnia Javascript API documentation
---

# Usage
## Constructor
```javascript
new Linnia(web3, ipfs [, options])
```

### Parameters
1. `Object` - An instantiated web3 API object
1. `Object` - An instantiated IPFS API object
1. `Object` - (Optional) Constructor options
  - `hubAddress`: `String` - Address of the LinniaHub. If not specified, Linnia Javascript API will attempt to find the address of the deployed LinniaHub on the network defined in `web3`.

### Example
```javascript
const Web3 = require('web3')
const Linnia = require('linnia')
const IPFS = require('ipfs-api')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
const ipfs = new IPFS({host: 'localhost', port: 5001, protocol: 'http'})
const linnia = new Linnia(web3, ipfs)
```

## Linnia.Deploy
```javascript
Linnia.deploy(web3, ipfs, [, options])
```
Deploys Linnia contracts onto the network defined in `web3`. This allows you to use your own instances of Linnia contracts with Linnia JS. However record querying functionalities are not currently available for self-deployed instances.

### Parameters
1. `Object` - An instantiated web3 API object
1. `Object` - An instantiated IPFS API object
1. `Object` - (Optional) A web3 [transaction object](https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethsendtransaction). If not specified, defaults will be used in the transactions that deploy the contracts.

### Returns
`Promise<Linnia>` - A promise when resolved returns a Linnia API object, that uses the deployed contract instances.

### Example
```javascript
const Web3 = require('web3')
const Linnia = require('linnia')
const IPFS = require('ipfs-api')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
const ipfs = new IPFS({host: 'localhost', port: 5001, protocol: 'http'})
Linnia.deploy(web3, ipfs, {
  from: web3.eth.accounts[0],
  gas: 4000000,
}).then((linnia) => {
  // do what you want to do with `linnia`
})
```

## linnia.getContractInstances
```javascript
linnia.getContractInstances()
```
Gets Linnia contract instances, wrapped in truffle contract.

### Returns
`Promise<Object>` - A promise when resolved returns an object with truffle Contract instances.
- `hub`: `Object` - LinniaHub truffle contract instance
- `users`: `Object` - LinniaUsers truffle contract instance
- `records`: `Object` - LinniaRecords truffle contract instance
- `permissions`: `Object` - LinniaPermissions truffle contract instance

### Example
```javascript
linnia.getContractInstances().then((instances) => {
  let hub = instances.hub
  let users = instances.users
  let records = instances.records
  let permissions = instances.permissions
})
```

## linnia.getRecord
```javascript
linnia.getRecord(dataHash)
```
Gets a record from Linnia by data hash

### Parameters
1. `String` - The data hash, hex-encoded, 0x prefixed

### Returns
`Promise<Object>` - A promise when resolved returns an instance of Record class.
- `owner`: `String` - Hex-encoded record owner address
- `metadataHash`: `String` - Hex-encoded metadata hash
- `sigCount`: `Object` - A bignumber object, the signature count
- `irisScore`: `Object` - A bignumber object, the IRIS score
- `dataUri`: `String` - URI of the data
- `timestamp`: `Date` - The timestamp when the record is added to Linnia

## linnia.getAttestation
```javascript
linnia.getAttestation(dataHash, attestatorAddress)
```
Gets the attestation of the data

### Parameters
1. `String` - The data hash, hex-encoded, 0x prefixed
1. `String` - The address of the attestator

### Returns
`Promise<Boolean>` - A promise when resolved returns true if the record is attested by the specified attestator.

## linnia.getPermission
```javascript
linnia.getPermission(dataHash, viewerAddress)
```
Gets the permission information of a record

### Parameters
1. `String` - The data hash, hex-encoded, 0x prefixed
1. `String` - The address of the data viewer

### Returns
`Promise<Object>` - A promise when resolved returns a Linnia Permission object.
- `canAccess`: `Boolean` - True if the specified viewer is allowed to access the record
- `dataUri`: `String` - The data URI of the shared recordg

## linnia.reDeployLinniaRecords

```javascript
linnia.reDeployLinniaRecords([, options])
```

Redeploy the records contract and keep all the others. This can be used in order to make changes in the code or just to remove all the data.

### Parameters

1. `Object` - (Optional) A web3 [transaction object](https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethsendtransaction). If not specified, defaults will be used in the transactions that deploy the contract.

---
# Record class
An instance of Record class is returned when `linnia.getRecord` is called and promise resolved.

## Members
- `owner`: `String` - Hex-encoded record owner address
- `metadataHash`: `String` - Hex-encoded metadata hash
- `sigCount`: `Object` - A bignumber object, the signature count
- `irisScore`: `Object` - A bignumber object, the IRIS score
- `dataUri`: `String` - URI of the data
- `timestamp`: `Date` - The timestamp when the record is added to Linnia

## record.getAttestation
```javascript
record.getAttestation(attestatorAddress)
```
Gets the attestation of the data

### Parameters
1. `String` - The address of the attestator

### Returns
`Promise<Boolean>` - A promise when resolved returns true if the record is attested by the specified attestator.

### Example
```javascript
let dataHash = '0x174e6ab7cf9a53497cff763d0743258f5d5014cb20ae08c7ec22bf50f5d5e326'
let attestator = '0xac07bea81fe26b379de0e4327f1a6ecd0875edfc'
linnia.getRecord(dataHash)
  .then((record) => record.getAttestation(attestator))
  .then((attested) => {
    if (attested) {
      // ...
    } else {
      // ...
    }
  })
```

## record.getPermission
```javascript
record.getPermission(viewerAddress)
```
Gets the permission information of a record

### Parameters
1. `String` - The address of the data viewer

### Returns
`Promise<Object>` - A promise when resolved returns a Linnia Permission object.
- `canAccess`: `Boolean` - True if the specified viewer is allowed to access the record
- `dataUri`: `String` - The data URI of the shared record

## record.decryptData
```javascript
record.decryptData(privKey, uriResolver)
```
Gets the plaintext data of the record

### Parameters
1. `Buffer|String` - The private key to decrypt the data
1. `(String) => (Promise<Buffer>)` - A function to resolve the data URI. The parameter is the string data URI. The function should return the encrypted data in a buffer.

### Returns
`Promise<Buffer>` - The plaintext data

### Example
```javascript
let privKey = '0x5230a384e9d271d59a05a9d9f94b79cd98fcdcee488d1047c59057046e128d2b'
linnia.decryptData(privKey, (dataUri) => {
  // assume data URI is HTTP URL here
  return fetch(dataUri).then((res) => {
    return res.arrayBuffer()
  })
}).then((plainText) => {
  console.log(plainText.toString())
})
```

## record.decryptPermissioned
```javascript
record.decryptPerissioned(viewerAddress, privKey, uriResolver)
```
Gets the plaintext data of a permissioned copy of the record

### Parameters
1. `String` - The address of viewer
1. `Buffer|String` - The private key to decrypt the data of the permissioned copy. Note that this is the key controlled by the viewer, not the record owner.
1. `(String) => (Promise<Buffer>)` - A function to resolve the data URI. The parameter is the string data URI. The function should return the encrypted data in a buffer.

### Returns
`Promise<Buffer>` - The plaintext data

## record.verifyData
```javascript
record.verifyData(plaintext)
```
Verifies the hash of the data against the one in Linnia.

### Parameters
1. `Buffer|String` - The plaintext data to be verified

### Returns
`Boolean` - True if hash matches

## record.reencryptData
```javascript
record.reencryptData(pubKey, privKey, uriResolver)
```
Re-encrypts the data to another public key

### Parameters
1. `Buffer|String` - Public key to re-encrypt the data to
1. `Buffer|String` - Private key to decrypt the record data. This should be a key controlled by the record owner
1. `(String) => (Promise<Buffer>)` - A function to resolve the data URI. The parameter is the string data URI. The function should return the encrypted data in a buffer.

### Returns
`Buffer` - The re-encrypted data

---
# Utility functions

## Linnia.util.encrypt
```javascript
Linnia.util.encrypt(pubKeyTo, plaintext [, options])
```
Encrypts a message using ECIES.

### Parameters
1. `Buffer|String` - The public key to encrypt the data to (64 bytes)
1. `Buffer|String` - The plaintext data
1. `Object` - (Optional) Encryption options
- `iv`: `Buffer` - (Optional) Initial vector used in AES-256-CBC (16 bytes)
- `ephemPrivKey`: `Buffer` - (Optional) Ephemeral private key in Diffie-Hellman

### Returns
`Buffer` - The encrypted data, which includes the IV, ephemeral public key, MAC, and ciphertext.

### Example
```javascript
let pubKey = '0xb1f26f98d374540eac3d31208f13a3935318e228207084c9ee32d741ff1ad2341af4ac9658aba4a254bf1dc6451b3c08524febba5273bec227c73e25cd376387'
let encrypted = Linnia.util.encrypt(pubKey, 'foo')
console.log(encrypted.toString('hex'))
```

## Linnia.util.decrypt
```javascript
Linnia.util.decrypt(privKey, ciphertext)
```
Decrypts a message ECIES encrypted by `Linnia.util.encrypt`.

### Parameters
1. `Buffer|String` - The private key to decrypt the data (32 bytes)
1. `Buffer|String` - The encrypted data, which includes the IV, ephemeral public key, MAC, and ciphertext.

### Returns
`Buffer` - The decrypted plaintext

### Example
```javascript
let encrypted = '0xbf18f1b6eb4b748b18cc3bd4a8d47f5f045766a445431dd918a43d6ca7871bdf7acd2214dce02a508a97f173f0697e781cf3cbf1b2d6fc0dcce940cdcef0aab443469773eb672b04117d4cb36336891aa98cd21f07d994b756f456f52db2b26a316fdbaaf87f52a638e0ad4d4280b63ec6447befdc97ecf07117bfc9eb8f8a073f'
let privKey = '0x5230a384e9d271d59a05a9d9f94b79cd98fcdcee488d1047c59057046e128d2b'
let plaintext = Linnia.util.decrypt(privKey, encrypted).toString()
// plaintext is 'foo'
```
