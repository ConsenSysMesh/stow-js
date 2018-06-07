linnia-js
---
Linnia JavaScript library

# Quickstart
```javascript
const Web3 = require('web3')
const Linnia = require('linnia')

let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
let linnia = new Linnia(web3)

// get the deployed contracts
let { hub, users, records, permissions } = await linnia.getContractInstances()
```
