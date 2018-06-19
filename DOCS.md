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
Deploys Linnia contracts onto the network defined in `web3`.

### Parameters
1. `Object` - An instantiated web3 API object
1. `Object` - An instantiated IPFS API object
1. `Object` - (Optional) A web3 [transaction object](https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethsendtransaction)

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
Gets deployed Linnia contract instances, wrapped in truffle contract.

### Returns
`Promise<Object>` - A promise when resolved returns an object with truffle Contract instances.
- `hub`: `Object` - LinniaHub truffle contract instance
- `users`: `Object` - LinniaUsers truffle contract instance
- `records`: `Object` - LinniaRecords truffle contract instance
- `permissions`: `Object` - LinniaPermissions truffle contract instance

### Example
```javascript
linnia.getContractInstances().then((instances) => {
  let hub = instances.hub;
  let users = instances.users;
  let records = instances.records;
  let permissions = instances.permissions;
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
`Promise<Object>` - A promise when resolved returns a Linnia Record object.
- `owner`: `String` - Hex-encoded record owner address
- `metadataHash`: `String` - Hex-encoded metadata hash
- `sigCount`: `Object` - A bignumber object, the signature count
- `irisScore`: `Object` - A bignumber object, the IRIS score
- `dataUri`: `String` - URI of the data
- `timestamp`: `Date` - The timestamp when the record is added to Linnia

## linnia.getPermission
```javascript
Linnia.getPermission(dataHash, viewerAddress)
```
Gets the permission information of a record

### Parameters
1. `String` - The data hash, hex-encoded, 0x prefixed
1. `String` - The address of the data viewer

### Returns
`Promise<Object>` - A promise when resolved returns a Linnia Permission object.
- `canAccess`: `bool` - True if the specified viewer is allowed to access the record
- `dataUri`: `String` - The data URI of the shared record
