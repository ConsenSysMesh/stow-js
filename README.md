# linnia-js  [![NPM Package](https://img.shields.io/npm/v/@linniaprotocol/linnia-js.svg?style=flat-square)](https://www.npmjs.com/package/@linniaprotocol/linnia-js) ![Build Status](https://circleci.com/gh/ConsenSys/linnia-js.png?circle-token=:circle-token&style=shield) 
---
Linnia JavaScript library

# Quickstart
```javascript
const Web3 = require('web3')
const Linnia = require('linnia')
const IPFS = require('ipfs-api')

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))

const ipfs = new IPFS({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
})

const linnia = new Linnia(web3, ipfs)

// get the deployed contracts
const { hub, users, records, permissions } = await linnia.getContractInstances()
```

# Building
```
npm run build
```
The compiled library is generated in `lib`, which you can require by typing `require('./lib')`

# Setting up a development environment

Interacting with the linnia-js requires a connection to the Ethereum network and a storage solution of your choice. If you follow this tutorial, you will be able to use the library to store files in IPFS, a decentralized storage solution that the Linnia team strongly recommends.

### Choosing an Ethereum Network to Use

[Ethereum](https://www.ethereum.org/) is a blockchain-based platform that allows for the operation of decentralized applications. Since the Linnia protocol is still a work in progress, we can test it by either connecting to the Ropsten Ethereum Testnet or use an application called Ganache to simulate an Ethereum network locally. You choose which network to connect to when you pass in the `web3` argument to the library constructor, like so:

```javascript
// local connection, since HttpProvider points to localhost
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
```

We strongly recommend starting your development locally with Ganache, then moving to Ropsten when you are ready to go live.

#### Using Ganache

The other option we have for testing is to simulate an ethereum network locally. Our sister project Truffle has created a great tool called [Ganache](http://truffleframework.com/ganache) that allows us to do this. We will use the [CLI version](https://github.com/trufflesuite/ganache-cli).

Our main repository, [https://github.com/ConsenSys/Linnia-Smart-Contracts](https://github.com/ConsenSys/Linnia-Smart-Contracts) includes a stable version of the CLI and a task to run it

To install it, use:
```bash
git clone https://github.com/ConsenSys/Linnia-Smart-Contracts
npm install
```

Now you can navigate to that repo and run:

```bash
npm run start
```
To run your own simulated blockchain locally on port 7545!

Now, to connect to the local blockchain, create this web3 object and pass it as the first argument to the linnia-js constructor:

```javascript
// local connection, since HttpProvider points to localhost
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
```

#### Ropsten Testnet

The Ropsten Testnet is a clone of the Ethereum testnet that allows us to deploy and test out our decentralized applications with no risk before deploying them on the Ethereum Mainnet. The Linnia team has already deployed a version of the Linnia Protocol smart contracts on this Testnet, so if you choose to use it, you already have half of the work done for you. On the flip side, **all interactions with these contracts are liable to be wiped out at any moment if the Linnia team redeploys.**

#### Registering for an Infura to connect to Ropsten

[Infura](https://infura.io/about) is a service that allows you to connect to the ethereum network locally without having to run a node. All you need to do to get started with Infura is [sign up here](https://infura.io/signup).

Once you do, Infura will send you an email with links to use to connect to Infura in this format:

```
https://ropsten.infura.io/${YOUR_ACCESS_TOKEN}
```

To connect to Ropsten when using linnia-js, create this web3 object and pass it as the first argument to the linnia-js constructor:

```javascript
// ropsten connection, since HttpProvider points to authenticated ropsten infura link
let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/${YOUR_ACCESS_TOKEN}'))
```

### Storing files on IPFS

[IPFS](https://ipfs.io), short for InterPlanetary File System, is a peer-to-peer storage solution for files. As with Ethereum, we have the option to either connect to the IPFS network, or run one locally ourselves.

#### Connecting to IPFS through Infura

If you wish to use Infura to connect to IPFS, congratulations, you are already done!

You can just use the Infura url when connecting, like so:

```javascript
const IPFS = require('ipfs-api')
const ipfs = new IPFS({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
})
```

To install it locally, head over to the [IPFS install page](https://ipfs.io/docs/install/) and download the binary. Once done, run:

```bash
sudo mv ipfs /usr/local/bin/ipfs
```

Then, to start the service, run:

```bash
ipfs init
ipfs daemon
```

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
- `dataUri`: `String` - The data URI of the shared record

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

