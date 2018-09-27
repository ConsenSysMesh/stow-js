<img src="./linnia-logo.jpg" width="300" height="300" />

## [![NPM Package](https://img.shields.io/npm/v/@linniaprotocol/linnia-js.svg?style=flat-square)](https://www.npmjs.com/package/@linniaprotocol/linnia-js) ![Build Status](https://circleci.com/gh/ConsenSys/linnia-js.png?circle-token=:circle-token&style=shield)

# LinniaJS

## Quickstart

```javascript
const Web3 = require("web3");
const Linnia = require("@linniaprotocol/linnia-js");

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

const linnia = new Linnia(web3);

// get the deployed contracts
const { _, users, records, permissions } = await linnia.getContractInstances();
```

## Installation

You can install using npm:

```bash
npm i @linniaprotocol/linnia-js
```

or add inject the library onto the `window` using a script tag:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@linniaprotocol/linnia-js-script-tag@0.1.1/dist/index.min.js"></script>
```

## Building

```
npm run build
```

The compiled library is generated in `lib`, which you can require by typing `require('./lib')`

## Setting up a Dev Environment

New to ethereum and/or Linnia? Head over to our [resources page](https://github.com/ConsenSys/linnia-resources) to learn more about the protocol and how to set up your ethereum development environment.

## API Documentation

### Constructor

```javascript
new Linnia(web3 [, options])
```

### Parameters

1. `Object` - An instantiated web3 API object
1. `Object` - (Optional) Constructor options

- `linniaContractUpgradeHubAddress`: `String` - Address of the LinniaHub. If not specified, Linnia Javascript API will attempt to find the address of the deployed LinniaHub on the network defined in `web3`.

### Example

```javascript
const Web3 = require("web3");
const Linnia = require("@linniaprotocol/linnia-js");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
const linnia = new Linnia(web3);
```

## linnia.getContractInstances

```javascript
linnia.getContractInstances();
```

Gets Linnia contract instances, wrapped in truffle contract.

### Returns

`Promise<Object>` - A promise when resolved returns an object with truffle Contract instances.

- `linniaContractUpgradeHubAddress`: `Object` - DO NOT USE - INTERNAL - LinniaHub truffle contract instance
- `users`: `Object` - LinniaUsers truffle contract instance
- `records`: `Object` - LinniaRecords truffle contract instance
- `permissions`: `Object` - LinniaPermissions truffle contract instance

### Example

```javascript
linnia.getContractInstances().then(instances => {
  let users = instances.users;
  let records = instances.records;
  let permissions = instances.permissions;
});
```

## linnia.getRecord

```javascript
linnia.getRecord(dataHash);
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
linnia.getAttestation(dataHash, attestatorAddress);
```

Gets the attestation of the data

### Parameters

1. `String` - The data hash, hex-encoded, 0x prefixed
1. `String` - The address of the attestator

### Returns

`Promise<Boolean>` - A promise when resolved returns true if the record is attested by the specified attestator.

## linnia.getPermission

```javascript
linnia.getPermission(dataHash, viewerAddress);
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

# Append data to Linnia

In order to append data to Linnia, your web3 instance need to be able to sign with the private key of the owner of the data.

## linnia.addRecordWithReward

```javascript
linnia.addRecordWithReward(dataHash, metadata, dataUri, ethParams);
```

Add record to Linnia and receive a small reward of linnia tokens

### Parameters

1. `String` - The data hash. Hash of the plain text data + metadata
2. `Object` - The metadata of the record. [Click here to read more about the metadata](https://github.com/ConsenSys/linnia-resources/blob/master/METADATA.md)
3. `String` - The dataUri, link to the data (eg. the IPFS hash)
4. `Object` - The ethParams, ethereum account params. (The object need to contain the key 'from')

### Returns

`Promise<Record>` - A promise when resolved returns the record object that was stored.

## linnia.addRecord

```javascript
linnia.addRecord(dataHash, metadata, dataUri, ethParams);
```

Add record to Linnia

### Parameters

1. `String` - The data hash. Hash of the plain text data + metadata
2. `Object` - The metadata of the record. [Click here to read more about the metadata](https://github.com/ConsenSys/linnia-resources/blob/master/METADATA.md)
3. `String` - The dataUri, link to the data (eg. the IPFS hash)
4. `Object` - The ethParams, ethereum account params. (The object need to contain the key 'from')

### Returns

`Promise<Record>` - A promise when resolved returns the record object that was stored.

### Append data using Linnia Js in the browser

 If you are using a Linnia Js in the browser you can create the Linnia instance with the web3 object from Metamask and append a record the following way:

### Example

```javascript
const Linnia = require("@linniaprotocol/linnia-js");
const linnia = new Linnia(web3);

const dataHash = "0xcc85fc3d763b9a1d83e4386b37b4b0f3daf9881638ba8b7db0c501c417acb689";
const metadata = {
    dataFormat: "json",
    domain: "social media",
    storage: "IPFS",
    encryptionScheme: "x25519-xsalsa20-poly1305",
    encryptionPublicKey: "hQYhHJpzZH/tGhz1wtqSjkL17tJSnEEC4yVGyNTHNQY=",
    linniajsVersion: "0.1.4",
    providerName: "SocialMedia",
    providerEthereumAddress: "0x349e31e92027f86b0ffeb5cd5e07003c7f229872",
    keywords: [ "socialmedia", "friends list", "people" ],
    creationDate: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
};
const dataUri = "QmSg3jCiroFERczWdpFJUau5CofHfMKCSm5vZXSzn7sZGW";
const ethParams = {
    from: "0xb717d7adf0d19f5f48bb7ff0030e30fcd19eed72", gas: 500000, gasPrice: 20000000000
};

const record = await linnia.addRecord(dataHash, metadata, dataUri, ethParams);
```

In the example above the dataUri is the IPFS Hash where the file was stored.

### Append data using Linnia Js outside of the browser

In order to add a file you need to generate a web3 instance that can handle the private keys of the owner of the file.

### Example

```javascript
const Linnia = require("@linniaprotocol/linnia-js");
const HDWalletProvider = require('truffle-hdwallet-provider');

// HERE YOU NEED TO ADD THE PRIVATE KEYS OF THE OWNERS
const privKeys = [privkey1, privkey2, ...]
                  
// HERE YOU NEED TO ADD THE PROVIDER, YOU COULD GET AND INFURA KEY AND PUT IT BELOW 
// OR USE ANY ETH PROVIDER
const provider = 'https://ropsten.infura.io/INFURA_KEY'
const hdWalletProvider = new HDWalletProvider(privKeys, provider);
const web3 = new Web3(hdWalletProvider);

const linnia = new Linnia(web3);

const dataHash = "0xcc85fc3d763b9a1d83e4386b37b4b0f3daf9881638ba8b7db0c501c417acb689";
const metadata = {
    dataFormat: "json",
    domain: "social media",
    storage: "IPFS",
    encryptionScheme: "x25519-xsalsa20-poly1305",
    encryptionPublicKey: "hQYhHJpzZH/tGhz1wtqSjkL17tJSnEEC4yVGyNTHNQY=",
    linniajsVersion: "0.1.4",
    providerName: "SocialMedia",
    providerEthereumAddress: "0x349e31e92027f86b0ffeb5cd5e07003c7f229872",
    keywords: [ "socialmedia", "friends list", "people" ],
    creationDate: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
};
const dataUri = "QmSg3jCiroFERczWdpFJUau5CofHfMKCSm5vZXSzn7sZGW";
const ethParams = {
    from: "0xb717d7adf0d19f5f48bb7ff0030e30fcd19eed72", gas: 500000, gasPrice: 20000000000
};

const record = await linnia.addRecord(dataHash, metadata, dataUri, ethParams);
```

# Attest data on Linnia

Attest data on Linnia means sign a record and verify that contain legitimate and correct information.

## linnia.signRecord

```javascript
linnia.signRecord(dataHash, ethParams);
```

Attest a record to Linnia

### Parameters

1. `String` - The data hash, hex-encoded, 0x prefixed
2. `Object` - The ethParams, ethereum account params. (The object need to contain the key 'from')

### Returns

`Promise<Attestation>` - A promise when resolved returns the Attestation that was added.

### Example

```javascript
const Linnia = require("@linniaprotocol/linnia-js");
const linnia = new Linnia(web3);

const dataHash = "0xcc85fc3d763b9a1d83e4386b37b4b0f3daf9881638ba8b7db0c501c417acb689";
const ethParams = {
    from: "0xb717d7adf0d19f5f48bb7ff0030e30fcd19eed72", gas: 500000, gasPrice: 20000000000
};

const attestation = await linnia.signRecord(dataHash, ethParams);
```

------



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
record.getAttestation(attestatorAddress);
```

Gets the attestation of the data

### Parameters

1. `String` - The address of the attestator

### Returns

`Promise<Boolean>` - A promise when resolved returns true if the record is attested by the specified attestator.

### Example

```javascript
let dataHash =
  "0x174e6ab7cf9a53497cff763d0743258f5d5014cb20ae08c7ec22bf50f5d5e326";
let attestator = "0xac07bea81fe26b379de0e4327f1a6ecd0875edfc";
linnia
  .getRecord(dataHash)
  .then(record => record.getAttestation(attestator))
  .then(attested => {
    if (attested) {
      // ...
    } else {
      // ...
    }
  });
```

## record.getPermission

```javascript
record.getPermission(viewerAddress);
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
record.decryptData(privKey, uriResolver);
```

Gets the plaintext data of the record

### Parameters

1. `String` - The private key to decrypt the data
1. `(String) => (String)` - A function to resolve the data URI. The parameter is the string data URI. The function should return the plaintext data.

### Returns

`String` - The plaintext data

### Example

```javascript
let privKey =
  "0x5230a384e9d271d59a05a9d9f94b79cd98fcdcee488d1047c59057046e128d2b";
linnia
  .decryptData(privKey, dataUri => {
    // assume data URI is HTTP URL here
    return fetch(dataUri).then(res => {
      return res.arrayBuffer();
    });
  })
  .then(plainText => {
    console.log(plainText.toString());
  });
```

## record.decryptPermissioned

```javascript
record.decryptPermissioned(viewerAddress, privKey, uriResolver)
```

Gets the plaintext data of a permissioned copy of the record

### Parameters

1. `String` - The address of viewer
1. `String` - The private key to decrypt the data of the permissioned copy. Note that this is the key controlled by the viewer, not the record owner.
1. `(String) => (Promise<String>)` - A function to resolve the data URI. The parameter is the string data URI. The function should return the encrypted data..

### Returns

`String` - The plaintext data

## record.verifyData

```javascript
record.verifyData(plaintext);
```

Verifies the hash of the data against the one in Linnia.

### Parameters

1. `String` - The plaintext data to be verified

### Returns

`Boolean` - True if hash matches

## record.reencryptData

```javascript
record.reencryptData(pubKey, privKey, uriResolver);
```

Re-encrypts the data to another public key

### Parameters

1. `String` - Public key to re-encrypt the data to
1. `String` - Private key to decrypt the record data. This should be a key controlled by the record owner
1. `(String) => (String)` - A function to resolve the data URI. The parameter is the string data URI. The function should return the encrypted data.

### Returns

`String` - The re-encrypted data

---

# Attestation class

## Members

- `attestator`: `String` - Hex-encoded attestator address
- `dataHash`: `String` - Hex-encoded data hash

------



# Utility functions

## Linnia.util.encrypt

```javascript
Linnia.util.encrypt(pubKeyTo, plaintext)
```

Encrypts a message.

### Parameters

1. `String` - The public key to encrypt the data
1. `String` - The plaintext data

### Returns

`String` - The encrypted data, which includes the IV, ephemeral public key, MAC, and ciphertext.

### Example

```javascript
let pubKey =
  "0xb1f26f98d374540eac3d31208f13a3935318e228207084c9ee32d741ff1ad2341af4ac9658aba4a254bf1dc6451b3c08524febba5273bec227c73e25cd376387";
let encrypted = Linnia.util.encrypt(pubKey, "foo");
console.log(encrypted.toString("hex"));
```

## Linnia.util.decrypt

```javascript
Linnia.util.decrypt(privKey, ciphertext);
```

Decrypts a message encrypted by `Linnia.util.encrypt`.

### Parameters

1. `String` - The private key to decrypt the data.
1. `String` - The encrypted data, which includes the IV, ephemeral public key, MAC, and ciphertext.

### Returns

`String` - The decrypted plaintext

### Example

```javascript
let encrypted =
  "0xbf18f1b6eb4b748b18cc3bd4a8d47f5f045766a445431dd918a43d6ca7871bdf7acd2214dce02a508a97f173f0697e781cf3cbf1b2d6fc0dcce940cdcef0aab443469773eb672b04117d4cb36336891aa98cd21f07d994b756f456f52db2b26a316fdbaaf87f52a638e0ad4d4280b63ec6447befdc97ecf07117bfc9eb8f8a073f";
let privKey =
  "0x5230a384e9d271d59a05a9d9f94b79cd98fcdcee488d1047c59057046e128d2b";
let plaintext = Linnia.util.decrypt(privKey, encrypted).toString();
// plaintext is 'foo'
```
