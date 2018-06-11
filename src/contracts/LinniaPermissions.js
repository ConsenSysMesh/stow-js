module.exports = {
  "contractName": "LinniaPermissions",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "hub",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "permissions",
      "outputs": [
        {
          "name": "canAccess",
          "type": "bool"
        },
        {
          "name": "dataUri",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_hub",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "dataHash",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "viewer",
          "type": "address"
        }
      ],
      "name": "LogAccessGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "dataHash",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "viewer",
          "type": "address"
        }
      ],
      "name": "LogAccessRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "dataHash",
          "type": "bytes32"
        },
        {
          "name": "viewer",
          "type": "address"
        },
        {
          "name": "dataUri",
          "type": "bytes32"
        }
      ],
      "name": "grantAccess",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "dataHash",
          "type": "bytes32"
        },
        {
          "name": "viewer",
          "type": "address"
        }
      ],
      "name": "revokeAccess",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50604051602080610f9783398101806040528101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610ed3806100c46000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063365a86fc146100875780633ec50c6c146100de57806376993264146101565780638d53b208146101cd5780638da5cb5b14610236578063f2fde38b1461028d575b34801561008457600080fd5b50005b34801561009357600080fd5b5061009c6102d0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100ea57600080fd5b5061012d6004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102f6565b604051808315151515815260200182600019166000191681526020019250505060405180910390f35b34801561016257600080fd5b506101b36004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190505050610334565b604051808215151515815260200191505060405180910390f35b3480156101d957600080fd5b5061021c6004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061084e565b604051808215151515815260200191505060405180910390f35b34801561024257600080fd5b5061024b610d2d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561029957600080fd5b506102ce600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d52565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900460ff16908060010154905082565b600060011515600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663142ebf3c6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156103c057600080fd5b505af11580156103d4573d6000803e3d6000fd5b505050506040513d60208110156103ea57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16634209fff1336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561049557600080fd5b505af11580156104a9573d6000803e3d6000fd5b505050506040513d60208110156104bf57600080fd5b810190808051906020019092919050505015151415156104de57600080fd5b833373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc0d561e6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561057c57600080fd5b505af1158015610590573d6000803e3d6000fd5b505050506040513d60208110156105a657600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166336880b82836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561062d57600080fd5b505af1158015610641573d6000803e3d6000fd5b505050506040513d602081101561065757600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614151561068a57600080fd5b60008473ffffffffffffffffffffffffffffffffffffffff16141515156106b057600080fd5b60006001028360001916141515156106c757600080fd5b60026000866000191660001916815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1615151561073c57600080fd5b6040805190810160405280600115158152602001846000191681525060026000876000191660001916815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff021916908315150217905550602082015181600101906000191690559050508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1686600019167f40960a1518de48ffd63acad2cfab21213a0d1ebe9ba174d1634bb707bc83f36160405160405180910390a460019150509392505050565b600060011515600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663142ebf3c6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156108da57600080fd5b505af11580156108ee573d6000803e3d6000fd5b505050506040513d602081101561090457600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16634209fff1336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156109af57600080fd5b505af11580156109c3573d6000803e3d6000fd5b505050506040513d60208110156109d957600080fd5b810190808051906020019092919050505015151415156109f857600080fd5b823373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc0d561e6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015610a9657600080fd5b505af1158015610aaa573d6000803e3d6000fd5b505050506040513d6020811015610ac057600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166336880b82836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610b4757600080fd5b505af1158015610b5b573d6000803e3d6000fd5b505050506040513d6020811015610b7157600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16141515610ba457600080fd5b60026000856000191660001916815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff161515610c1857600080fd5b604080519081016040528060001515815260200160006001026000191681525060026000866000191660001916815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff021916908315150217905550602082015181600101906000191690559050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1685600019167f165bd0f65a8350ab50ef57539ea72ed108cc257c066b2589df2d96c10e957b4f60405160405180910390a4600191505092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610dad57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610de957600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820da6711519dd973f27e03848a5375f8dae5c254ece34abe6a571c4485eb4db5ec0029",
  "deployedBytecode": "0x608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063365a86fc146100875780633ec50c6c146100de57806376993264146101565780638d53b208146101cd5780638da5cb5b14610236578063f2fde38b1461028d575b34801561008457600080fd5b50005b34801561009357600080fd5b5061009c6102d0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100ea57600080fd5b5061012d6004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102f6565b604051808315151515815260200182600019166000191681526020019250505060405180910390f35b34801561016257600080fd5b506101b36004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190505050610334565b604051808215151515815260200191505060405180910390f35b3480156101d957600080fd5b5061021c6004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061084e565b604051808215151515815260200191505060405180910390f35b34801561024257600080fd5b5061024b610d2d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561029957600080fd5b506102ce600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d52565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900460ff16908060010154905082565b600060011515600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663142ebf3c6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156103c057600080fd5b505af11580156103d4573d6000803e3d6000fd5b505050506040513d60208110156103ea57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16634209fff1336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561049557600080fd5b505af11580156104a9573d6000803e3d6000fd5b505050506040513d60208110156104bf57600080fd5b810190808051906020019092919050505015151415156104de57600080fd5b833373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc0d561e6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561057c57600080fd5b505af1158015610590573d6000803e3d6000fd5b505050506040513d60208110156105a657600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166336880b82836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561062d57600080fd5b505af1158015610641573d6000803e3d6000fd5b505050506040513d602081101561065757600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614151561068a57600080fd5b60008473ffffffffffffffffffffffffffffffffffffffff16141515156106b057600080fd5b60006001028360001916141515156106c757600080fd5b60026000866000191660001916815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1615151561073c57600080fd5b6040805190810160405280600115158152602001846000191681525060026000876000191660001916815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff021916908315150217905550602082015181600101906000191690559050508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1686600019167f40960a1518de48ffd63acad2cfab21213a0d1ebe9ba174d1634bb707bc83f36160405160405180910390a460019150509392505050565b600060011515600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663142ebf3c6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156108da57600080fd5b505af11580156108ee573d6000803e3d6000fd5b505050506040513d602081101561090457600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16634209fff1336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156109af57600080fd5b505af11580156109c3573d6000803e3d6000fd5b505050506040513d60208110156109d957600080fd5b810190808051906020019092919050505015151415156109f857600080fd5b823373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc0d561e6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015610a9657600080fd5b505af1158015610aaa573d6000803e3d6000fd5b505050506040513d6020811015610ac057600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166336880b82836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610b4757600080fd5b505af1158015610b5b573d6000803e3d6000fd5b505050506040513d6020811015610b7157600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16141515610ba457600080fd5b60026000856000191660001916815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff161515610c1857600080fd5b604080519081016040528060001515815260200160006001026000191681525060026000866000191660001916815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff021916908315150217905550602082015181600101906000191690559050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1685600019167f165bd0f65a8350ab50ef57539ea72ed108cc257c066b2589df2d96c10e957b4f60405160405180910390a4600191505092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610dad57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610de957600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820da6711519dd973f27e03848a5375f8dae5c254ece34abe6a571c4485eb4db5ec0029",
  "sourceMap": "185:2589:1:-;;;1044:62;8:9:-1;5:2;;;30:1;27;20:12;5:2;1044:62:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;509:10:6;501:5;;:18;;;;;;;;;;;;;;;;;;1095:4:1;1089:3;;:10;;;;;;;;;;;;;;;;;;1044:62;185:2589;;;;;;",
  "deployedSourceMap": "185:2589:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;185:2589:1;;596:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;596:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;670:69;;8:9:-1;5:2;;;30:1;27;20:12;5:2;670:69:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1473:577;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1473:577:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2306:466;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2306:466:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:6;;;;;;;;;;;;;;;;;;;;;;;;;;;832:174;;8:9:-1;5:2;;;30:1;27;20:12;5:2;832:174:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;596:20:1;;;;;;;;;;;;;:::o;670:69::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1473:577::-;1632:4;846;804:46;;:3;;;;;;;;;;;:17;;;:19;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;804:19:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;804:19:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;804:19:1;;;;;;;;;;;;;;;;:26;;;831:10;804:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;804:38:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;804:38:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;804:38:1;;;;;;;;;;;;;;;;:46;;;796:55;;;;;;;;1588:8;987:10;938:59;;:3;;;;;;;;;;;:19;;;:21;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;938:21:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;938:21:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;938:21:1;;;;;;;;;;;;;;;;:35;;;974:8;938:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;938:45:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;938:45:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;938:45:1;;;;;;;;;;;;;;;;:59;;;930:68;;;;;;;;1693:1;1683:6;:11;;;;1675:20;;;;;;;;1724:1;1713:12;;:7;:12;;;;;1705:21;;;;;;;;1798:11;:21;1810:8;1798:21;;;;;;;;;;;;;;;;;:29;1820:6;1798:29;;;;;;;;;;;;;;;:39;;;;;;;;;;;;1797:40;1789:49;;;;;;;;1880:81;;;;;;;;;1916:4;1880:81;;;;;;1943:7;1880:81;;;;;;1848:11;:21;1860:8;1848:21;;;;;;;;;;;;;;;;;:29;1870:6;1848:29;;;;;;;;;;;;;;;:113;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2015:6;1976:46;;2003:10;1976:46;;1993:8;1976:46;;;;;;;;;;;;;2039:4;2032:11;;861:1;1473:577;;;;;:::o;2306:466::-;2449:4;846;804:46;;:3;;;;;;;;;;;:17;;;:19;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;804:19:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;804:19:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;804:19:1;;;;;;;;;;;;;;;;:26;;;831:10;804:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;804:38:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;804:38:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;804:38:1;;;;;;;;;;;;;;;;:46;;;796:55;;;;;;;;2405:8;987:10;938:59;;:3;;;;;;;;;;;:19;;;:21;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;938:21:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;938:21:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;938:21:1;;;;;;;;;;;;;;;;:35;;;974:8;938:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;938:45:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;938:45:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;938:45:1;;;;;;;;;;;;;;;;:59;;;930:68;;;;;;;;2525:11;:21;2537:8;2525:21;;;;;;;;;;;;;;;;;:29;2547:6;2525:29;;;;;;;;;;;;;;;:39;;;;;;;;;;;;2517:48;;;;;;;;2607:76;;;;;;;;;2643:5;2607:76;;;;;;2671:1;2607:76;;;;;;;;2575:11;:21;2587:8;2575:21;;;;;;;;;;;;;;;;;:29;2597:6;2575:29;;;;;;;;;;;;;;;:108;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2737:6;2698:46;;2725:10;2698:46;;2715:8;2698:46;;;;;;;;;;;;;2761:4;2754:11;;861:1;2306:466;;;;:::o;238:20:6:-;;;;;;;;;;;;;:::o;832:174::-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;970:8;942:37;;963:5;;;;;;;;;;;942:37;;;;;;;;;;;;993:8;985:5;;:16;;;;;;;;;;;;;;;;;;832:174;:::o",
  "source": "pragma solidity ^0.4.23;\n\nimport \"node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport \"./LinniaHub.sol\";\nimport \"./LinniaRecords.sol\";\nimport \"./LinniaUsers.sol\";\n\n\ncontract LinniaPermissions is Ownable {\n    struct Permission {\n        bool canAccess;\n        // ipfs path of the data, encrypted to the viewer\n        bytes32 dataUri;\n    }\n\n    event LogAccessGranted(bytes32 indexed dataHash, address indexed owner,\n        address indexed viewer\n    );\n    event LogAccessRevoked(bytes32 indexed dataHash, address indexed owner,\n        address indexed viewer\n    );\n\n    LinniaHub public hub;\n    // dataHash => viewer => permission mapping\n    mapping(bytes32 => mapping(address => Permission)) public permissions;\n\n    /* Modifiers */\n    modifier onlyUser() {\n        require(hub.usersContract().isUser(msg.sender) == true);\n        _;\n    }\n\n    modifier onlyRecordOwnerOf(bytes32 dataHash) {\n        require(hub.recordsContract().recordOwnerOf(dataHash) == msg.sender);\n        _;\n    }\n\n    /* Constructor */\n    constructor(LinniaHub _hub) public {\n        hub = _hub;\n    }\n\n    /* Fallback function */\n    function () public { }\n\n    /* External functions */\n\n    /// Give a viewer access to a linnia record\n    /// Called by owner of the record.\n    /// @param dataHash the data hash of the linnia record\n    /// @param viewer the user being permissioned to view the data\n    /// @param dataUri the ipfs path of the re-encrypted data\n    function grantAccess(bytes32 dataHash, address viewer, bytes32 dataUri)\n        onlyUser\n        onlyRecordOwnerOf(dataHash)\n        external\n        returns (bool)\n    {\n        // check input\n        require(viewer != 0);\n        require(dataUri != 0);\n        // access must not have already been granted\n        require(!permissions[dataHash][viewer].canAccess);\n        permissions[dataHash][viewer] = Permission({\n            canAccess: true,\n            dataUri: dataUri\n        });\n        emit LogAccessGranted(dataHash, msg.sender, viewer);\n        return true;\n    }\n\n    /// Revoke a viewer access to a linnia record\n    /// Note that this does not necessarily remove the file from storage\n    /// @param dataHash the data hash of the linnia record\n    /// @param viewer the user that has permission to view the data\n    function revokeAccess(bytes32 dataHash, address viewer)\n        onlyUser\n        onlyRecordOwnerOf(dataHash)\n        external\n        returns (bool)\n    {\n        // access must have already been grated\n        require(permissions[dataHash][viewer].canAccess);\n        permissions[dataHash][viewer] = Permission({\n            canAccess: false,\n            dataUri: 0\n        });\n        emit LogAccessRevoked(dataHash, msg.sender, viewer);\n        return true;\n    }\n}\n",
  "sourcePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaPermissions.sol",
  "ast": {
    "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaPermissions.sol",
    "exportedSymbols": {
      "LinniaPermissions": [
        310
      ]
    },
    "id": 311,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 123,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 124,
        "nodeType": "ImportDirective",
        "scope": 311,
        "sourceUnit": 1164,
        "src": "26:72:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaHub.sol",
        "file": "./LinniaHub.sol",
        "id": 125,
        "nodeType": "ImportDirective",
        "scope": 311,
        "sourceUnit": 122,
        "src": "99:25:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaRecords.sol",
        "file": "./LinniaRecords.sol",
        "id": 126,
        "nodeType": "ImportDirective",
        "scope": 311,
        "sourceUnit": 811,
        "src": "125:29:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaUsers.sol",
        "file": "./LinniaUsers.sol",
        "id": 127,
        "nodeType": "ImportDirective",
        "scope": 311,
        "sourceUnit": 955,
        "src": "155:27:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 128,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1163,
              "src": "215:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1163",
                "typeString": "contract Ownable"
              }
            },
            "id": 129,
            "nodeType": "InheritanceSpecifier",
            "src": "215:7:1"
          }
        ],
        "contractDependencies": [
          1163
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 310,
        "linearizedBaseContracts": [
          310,
          1163
        ],
        "name": "LinniaPermissions",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "LinniaPermissions.Permission",
            "id": 134,
            "members": [
              {
                "constant": false,
                "id": 131,
                "name": "canAccess",
                "nodeType": "VariableDeclaration",
                "scope": 134,
                "src": "257:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 130,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "257:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 133,
                "name": "dataUri",
                "nodeType": "VariableDeclaration",
                "scope": 134,
                "src": "339:15:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 132,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "339:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Permission",
            "nodeType": "StructDefinition",
            "scope": 310,
            "src": "229:132:1",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 142,
            "name": "LogAccessGranted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 141,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 136,
                  "indexed": true,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "390:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 135,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "390:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 138,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "416:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 137,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "416:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 140,
                  "indexed": true,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "447:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 139,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "389:86:1"
            },
            "src": "367:109:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 150,
            "name": "LogAccessRevoked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 144,
                  "indexed": true,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 150,
                  "src": "504:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "504:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 150,
                  "src": "530:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 145,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "530:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 148,
                  "indexed": true,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 150,
                  "src": "561:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 147,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "561:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "503:86:1"
            },
            "src": "481:109:1"
          },
          {
            "constant": false,
            "id": 152,
            "name": "hub",
            "nodeType": "VariableDeclaration",
            "scope": 310,
            "src": "596:20:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaHub_$121",
              "typeString": "contract LinniaHub"
            },
            "typeName": {
              "contractScope": null,
              "id": 151,
              "name": "LinniaHub",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 121,
              "src": "596:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaHub_$121",
                "typeString": "contract LinniaHub"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 158,
            "name": "permissions",
            "nodeType": "VariableDeclaration",
            "scope": 310,
            "src": "670:69:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$_$",
              "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission))"
            },
            "typeName": {
              "id": 157,
              "keyType": {
                "id": 153,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "678:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "670:50:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$_$",
                "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission))"
              },
              "valueType": {
                "id": 156,
                "keyType": {
                  "id": 154,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "697:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "689:30:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$",
                  "typeString": "mapping(address => struct LinniaPermissions.Permission)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 155,
                  "name": "Permission",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 134,
                  "src": "708:10:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permission_$134_storage_ptr",
                    "typeString": "struct LinniaPermissions.Permission"
                  }
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 173,
              "nodeType": "Block",
              "src": "786:83:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 169,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 165,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1178,
                                "src": "831:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 166,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "831:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 161,
                                  "name": "hub",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 152,
                                  "src": "804:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_LinniaHub_$121",
                                    "typeString": "contract LinniaHub"
                                  }
                                },
                                "id": 162,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "usersContract",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 9,
                                "src": "804:17:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$__$returns$_t_contract$_LinniaUsers_$954_$",
                                  "typeString": "function () view external returns (contract LinniaUsers)"
                                }
                              },
                              "id": 163,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "804:19:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_LinniaUsers_$954",
                                "typeString": "contract LinniaUsers"
                              }
                            },
                            "id": 164,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "isUser",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 931,
                            "src": "804:26:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view external returns (bool)"
                            }
                          },
                          "id": 167,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "804:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 168,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "846:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "804:46:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 160,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "796:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "796:55:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 171,
                  "nodeType": "ExpressionStatement",
                  "src": "796:55:1"
                },
                {
                  "id": 172,
                  "nodeType": "PlaceholderStatement",
                  "src": "861:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 174,
            "name": "onlyUser",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 159,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "783:2:1"
            },
            "src": "766:103:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 191,
              "nodeType": "Block",
              "src": "920:96:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 187,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 183,
                              "name": "dataHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 176,
                              "src": "974:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 179,
                                  "name": "hub",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 152,
                                  "src": "938:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_LinniaHub_$121",
                                    "typeString": "contract LinniaHub"
                                  }
                                },
                                "id": 180,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "recordsContract",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 11,
                                "src": "938:19:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$__$returns$_t_contract$_LinniaRecords_$810_$",
                                  "typeString": "function () view external returns (contract LinniaRecords)"
                                }
                              },
                              "id": 181,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "938:21:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_LinniaRecords_$810",
                                "typeString": "contract LinniaRecords"
                              }
                            },
                            "id": 182,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "recordOwnerOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 624,
                            "src": "938:35:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                              "typeString": "function (bytes32) view external returns (address)"
                            }
                          },
                          "id": 184,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "938:45:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 185,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1178,
                            "src": "987:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 186,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "987:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "938:59:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 178,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "930:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "930:68:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 189,
                  "nodeType": "ExpressionStatement",
                  "src": "930:68:1"
                },
                {
                  "id": 190,
                  "nodeType": "PlaceholderStatement",
                  "src": "1008:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 192,
            "name": "onlyRecordOwnerOf",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 177,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 176,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 192,
                  "src": "902:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 175,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "902:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "901:18:1"
            },
            "src": "875:141:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 201,
              "nodeType": "Block",
              "src": "1079:27:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 197,
                      "name": "hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 152,
                      "src": "1089:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$121",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 198,
                      "name": "_hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 194,
                      "src": "1095:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$121",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "src": "1089:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$121",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "id": 200,
                  "nodeType": "ExpressionStatement",
                  "src": "1089:10:1"
                }
              ]
            },
            "documentation": null,
            "id": 202,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 195,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 194,
                  "name": "_hub",
                  "nodeType": "VariableDeclaration",
                  "scope": 202,
                  "src": "1056:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaHub_$121",
                    "typeString": "contract LinniaHub"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 193,
                    "name": "LinniaHub",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 121,
                    "src": "1056:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$121",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1055:16:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 196,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1079:0:1"
            },
            "scope": 310,
            "src": "1044:62:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 205,
              "nodeType": "Block",
              "src": "1159:3:1",
              "statements": []
            },
            "documentation": null,
            "id": 206,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 203,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1149:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 204,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1159:0:1"
            },
            "scope": 310,
            "src": "1140:22:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 264,
              "nodeType": "Block",
              "src": "1642:408:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 225,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 223,
                          "name": "viewer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 210,
                          "src": "1683:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 224,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1693:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1683:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 222,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "1675:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1675:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 227,
                  "nodeType": "ExpressionStatement",
                  "src": "1675:20:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "id": 231,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 229,
                          "name": "dataUri",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 212,
                          "src": "1713:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 230,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1724:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1713:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 228,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "1705:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1705:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 233,
                  "nodeType": "ExpressionStatement",
                  "src": "1705:21:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 241,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1797:40:1",
                        "subExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 235,
                                "name": "permissions",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 158,
                                "src": "1798:11:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$_$",
                                  "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                                }
                              },
                              "id": 237,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 236,
                                "name": "dataHash",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 208,
                                "src": "1810:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1798:21:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$",
                                "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                              }
                            },
                            "id": 239,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 238,
                              "name": "viewer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 210,
                              "src": "1820:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1798:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permission_$134_storage",
                              "typeString": "struct LinniaPermissions.Permission storage ref"
                            }
                          },
                          "id": 240,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "canAccess",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 131,
                          "src": "1798:39:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 234,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "1789:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1789:49:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 243,
                  "nodeType": "ExpressionStatement",
                  "src": "1789:49:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 253,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 244,
                          "name": "permissions",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 158,
                          "src": "1848:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$_$",
                            "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                          }
                        },
                        "id": 247,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 245,
                          "name": "dataHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 208,
                          "src": "1860:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1848:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$",
                          "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                        }
                      },
                      "id": 248,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 246,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 210,
                        "src": "1870:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1848:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$134_storage",
                        "typeString": "struct LinniaPermissions.Permission storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 250,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1916:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "argumentTypes": null,
                          "id": 251,
                          "name": "dataUri",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 212,
                          "src": "1943:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 249,
                        "name": "Permission",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 134,
                        "src": "1880:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Permission_$134_storage_ptr_$",
                          "typeString": "type(struct LinniaPermissions.Permission storage pointer)"
                        }
                      },
                      "id": 252,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [
                        "canAccess",
                        "dataUri"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "1880:81:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$134_memory",
                        "typeString": "struct LinniaPermissions.Permission memory"
                      }
                    },
                    "src": "1848:113:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permission_$134_storage",
                      "typeString": "struct LinniaPermissions.Permission storage ref"
                    }
                  },
                  "id": 254,
                  "nodeType": "ExpressionStatement",
                  "src": "1848:113:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 256,
                        "name": "dataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 208,
                        "src": "1993:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 257,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1178,
                          "src": "2003:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 258,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2003:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 259,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 210,
                        "src": "2015:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 255,
                      "name": "LogAccessGranted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 142,
                      "src": "1976:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address,address)"
                      }
                    },
                    "id": 260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1976:46:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 261,
                  "nodeType": "EmitStatement",
                  "src": "1971:51:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 262,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2039:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 221,
                  "id": 263,
                  "nodeType": "Return",
                  "src": "2032:11:1"
                }
              ]
            },
            "documentation": "Give a viewer access to a linnia record\n Called by owner of the record.\n @param dataHash the data hash of the linnia record\n @param viewer the user being permissioned to view the data\n @param dataUri the ipfs path of the re-encrypted data",
            "id": 265,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 215,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 214,
                  "name": "onlyUser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 174,
                  "src": "1553:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1553:8:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 217,
                    "name": "dataHash",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 208,
                    "src": "1588:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 218,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 216,
                  "name": "onlyRecordOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 192,
                  "src": "1570:17:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1570:27:1"
              }
            ],
            "name": "grantAccess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 213,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 208,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 265,
                  "src": "1494:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 207,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1494:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 210,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 265,
                  "src": "1512:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 209,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1512:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 212,
                  "name": "dataUri",
                  "nodeType": "VariableDeclaration",
                  "scope": 265,
                  "src": "1528:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 211,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1528:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1493:51:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 220,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 265,
                  "src": "1632:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 219,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1632:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1631:6:1"
            },
            "scope": 310,
            "src": "1473:577:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 308,
              "nodeType": "Block",
              "src": "2459:313:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 280,
                              "name": "permissions",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 158,
                              "src": "2525:11:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$_$",
                                "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                              }
                            },
                            "id": 282,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 281,
                              "name": "dataHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 267,
                              "src": "2537:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2525:21:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$",
                              "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                            }
                          },
                          "id": 284,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 283,
                            "name": "viewer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 269,
                            "src": "2547:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2525:29:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permission_$134_storage",
                            "typeString": "struct LinniaPermissions.Permission storage ref"
                          }
                        },
                        "id": 285,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "canAccess",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 131,
                        "src": "2525:39:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 279,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "2517:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 286,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2517:48:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 287,
                  "nodeType": "ExpressionStatement",
                  "src": "2517:48:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 288,
                          "name": "permissions",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 158,
                          "src": "2575:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$_$",
                            "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                          }
                        },
                        "id": 291,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 289,
                          "name": "dataHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 267,
                          "src": "2587:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2575:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$",
                          "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                        }
                      },
                      "id": 292,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 290,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 269,
                        "src": "2597:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2575:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$134_storage",
                        "typeString": "struct LinniaPermissions.Permission storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 294,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2643:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 295,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2671:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 293,
                        "name": "Permission",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 134,
                        "src": "2607:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Permission_$134_storage_ptr_$",
                          "typeString": "type(struct LinniaPermissions.Permission storage pointer)"
                        }
                      },
                      "id": 296,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [
                        "canAccess",
                        "dataUri"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "2607:76:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$134_memory",
                        "typeString": "struct LinniaPermissions.Permission memory"
                      }
                    },
                    "src": "2575:108:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permission_$134_storage",
                      "typeString": "struct LinniaPermissions.Permission storage ref"
                    }
                  },
                  "id": 298,
                  "nodeType": "ExpressionStatement",
                  "src": "2575:108:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 300,
                        "name": "dataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 267,
                        "src": "2715:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 301,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1178,
                          "src": "2725:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 302,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2725:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 303,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 269,
                        "src": "2737:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 299,
                      "name": "LogAccessRevoked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 150,
                      "src": "2698:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address,address)"
                      }
                    },
                    "id": 304,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2698:46:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 305,
                  "nodeType": "EmitStatement",
                  "src": "2693:51:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 306,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2761:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 278,
                  "id": 307,
                  "nodeType": "Return",
                  "src": "2754:11:1"
                }
              ]
            },
            "documentation": "Revoke a viewer access to a linnia record\n Note that this does not necessarily remove the file from storage\n @param dataHash the data hash of the linnia record\n @param viewer the user that has permission to view the data",
            "id": 309,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 272,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 271,
                  "name": "onlyUser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 174,
                  "src": "2370:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2370:8:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 274,
                    "name": "dataHash",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 267,
                    "src": "2405:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 275,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 273,
                  "name": "onlyRecordOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 192,
                  "src": "2387:17:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2387:27:1"
              }
            ],
            "name": "revokeAccess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 267,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 309,
                  "src": "2328:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 266,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2328:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 269,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 309,
                  "src": "2346:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 268,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2346:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2327:34:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 278,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 277,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 309,
                  "src": "2449:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 276,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2449:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2448:6:1"
            },
            "scope": 310,
            "src": "2306:466:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 311,
        "src": "185:2589:1"
      }
    ],
    "src": "0:2775:1"
  },
  "legacyAST": {
    "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaPermissions.sol",
    "exportedSymbols": {
      "LinniaPermissions": [
        310
      ]
    },
    "id": 311,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 123,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 124,
        "nodeType": "ImportDirective",
        "scope": 311,
        "sourceUnit": 1164,
        "src": "26:72:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaHub.sol",
        "file": "./LinniaHub.sol",
        "id": 125,
        "nodeType": "ImportDirective",
        "scope": 311,
        "sourceUnit": 122,
        "src": "99:25:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaRecords.sol",
        "file": "./LinniaRecords.sol",
        "id": 126,
        "nodeType": "ImportDirective",
        "scope": 311,
        "sourceUnit": 811,
        "src": "125:29:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaUsers.sol",
        "file": "./LinniaUsers.sol",
        "id": 127,
        "nodeType": "ImportDirective",
        "scope": 311,
        "sourceUnit": 955,
        "src": "155:27:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 128,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1163,
              "src": "215:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1163",
                "typeString": "contract Ownable"
              }
            },
            "id": 129,
            "nodeType": "InheritanceSpecifier",
            "src": "215:7:1"
          }
        ],
        "contractDependencies": [
          1163
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 310,
        "linearizedBaseContracts": [
          310,
          1163
        ],
        "name": "LinniaPermissions",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "LinniaPermissions.Permission",
            "id": 134,
            "members": [
              {
                "constant": false,
                "id": 131,
                "name": "canAccess",
                "nodeType": "VariableDeclaration",
                "scope": 134,
                "src": "257:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 130,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "257:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 133,
                "name": "dataUri",
                "nodeType": "VariableDeclaration",
                "scope": 134,
                "src": "339:15:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 132,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "339:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Permission",
            "nodeType": "StructDefinition",
            "scope": 310,
            "src": "229:132:1",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 142,
            "name": "LogAccessGranted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 141,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 136,
                  "indexed": true,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "390:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 135,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "390:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 138,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "416:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 137,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "416:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 140,
                  "indexed": true,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "447:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 139,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "389:86:1"
            },
            "src": "367:109:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 150,
            "name": "LogAccessRevoked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 144,
                  "indexed": true,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 150,
                  "src": "504:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "504:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 150,
                  "src": "530:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 145,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "530:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 148,
                  "indexed": true,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 150,
                  "src": "561:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 147,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "561:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "503:86:1"
            },
            "src": "481:109:1"
          },
          {
            "constant": false,
            "id": 152,
            "name": "hub",
            "nodeType": "VariableDeclaration",
            "scope": 310,
            "src": "596:20:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaHub_$121",
              "typeString": "contract LinniaHub"
            },
            "typeName": {
              "contractScope": null,
              "id": 151,
              "name": "LinniaHub",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 121,
              "src": "596:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaHub_$121",
                "typeString": "contract LinniaHub"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 158,
            "name": "permissions",
            "nodeType": "VariableDeclaration",
            "scope": 310,
            "src": "670:69:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$_$",
              "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission))"
            },
            "typeName": {
              "id": 157,
              "keyType": {
                "id": 153,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "678:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "670:50:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$_$",
                "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission))"
              },
              "valueType": {
                "id": 156,
                "keyType": {
                  "id": 154,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "697:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "689:30:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$",
                  "typeString": "mapping(address => struct LinniaPermissions.Permission)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 155,
                  "name": "Permission",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 134,
                  "src": "708:10:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permission_$134_storage_ptr",
                    "typeString": "struct LinniaPermissions.Permission"
                  }
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 173,
              "nodeType": "Block",
              "src": "786:83:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 169,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 165,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1178,
                                "src": "831:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 166,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "831:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 161,
                                  "name": "hub",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 152,
                                  "src": "804:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_LinniaHub_$121",
                                    "typeString": "contract LinniaHub"
                                  }
                                },
                                "id": 162,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "usersContract",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 9,
                                "src": "804:17:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$__$returns$_t_contract$_LinniaUsers_$954_$",
                                  "typeString": "function () view external returns (contract LinniaUsers)"
                                }
                              },
                              "id": 163,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "804:19:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_LinniaUsers_$954",
                                "typeString": "contract LinniaUsers"
                              }
                            },
                            "id": 164,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "isUser",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 931,
                            "src": "804:26:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view external returns (bool)"
                            }
                          },
                          "id": 167,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "804:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 168,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "846:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "804:46:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 160,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "796:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "796:55:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 171,
                  "nodeType": "ExpressionStatement",
                  "src": "796:55:1"
                },
                {
                  "id": 172,
                  "nodeType": "PlaceholderStatement",
                  "src": "861:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 174,
            "name": "onlyUser",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 159,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "783:2:1"
            },
            "src": "766:103:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 191,
              "nodeType": "Block",
              "src": "920:96:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 187,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 183,
                              "name": "dataHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 176,
                              "src": "974:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 179,
                                  "name": "hub",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 152,
                                  "src": "938:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_LinniaHub_$121",
                                    "typeString": "contract LinniaHub"
                                  }
                                },
                                "id": 180,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "recordsContract",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 11,
                                "src": "938:19:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$__$returns$_t_contract$_LinniaRecords_$810_$",
                                  "typeString": "function () view external returns (contract LinniaRecords)"
                                }
                              },
                              "id": 181,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "938:21:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_LinniaRecords_$810",
                                "typeString": "contract LinniaRecords"
                              }
                            },
                            "id": 182,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "recordOwnerOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 624,
                            "src": "938:35:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                              "typeString": "function (bytes32) view external returns (address)"
                            }
                          },
                          "id": 184,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "938:45:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 185,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1178,
                            "src": "987:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 186,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "987:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "938:59:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 178,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "930:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "930:68:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 189,
                  "nodeType": "ExpressionStatement",
                  "src": "930:68:1"
                },
                {
                  "id": 190,
                  "nodeType": "PlaceholderStatement",
                  "src": "1008:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 192,
            "name": "onlyRecordOwnerOf",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 177,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 176,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 192,
                  "src": "902:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 175,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "902:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "901:18:1"
            },
            "src": "875:141:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 201,
              "nodeType": "Block",
              "src": "1079:27:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 197,
                      "name": "hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 152,
                      "src": "1089:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$121",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 198,
                      "name": "_hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 194,
                      "src": "1095:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$121",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "src": "1089:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$121",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "id": 200,
                  "nodeType": "ExpressionStatement",
                  "src": "1089:10:1"
                }
              ]
            },
            "documentation": null,
            "id": 202,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 195,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 194,
                  "name": "_hub",
                  "nodeType": "VariableDeclaration",
                  "scope": 202,
                  "src": "1056:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaHub_$121",
                    "typeString": "contract LinniaHub"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 193,
                    "name": "LinniaHub",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 121,
                    "src": "1056:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$121",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1055:16:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 196,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1079:0:1"
            },
            "scope": 310,
            "src": "1044:62:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 205,
              "nodeType": "Block",
              "src": "1159:3:1",
              "statements": []
            },
            "documentation": null,
            "id": 206,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 203,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1149:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 204,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1159:0:1"
            },
            "scope": 310,
            "src": "1140:22:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 264,
              "nodeType": "Block",
              "src": "1642:408:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 225,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 223,
                          "name": "viewer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 210,
                          "src": "1683:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 224,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1693:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1683:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 222,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "1675:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1675:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 227,
                  "nodeType": "ExpressionStatement",
                  "src": "1675:20:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "id": 231,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 229,
                          "name": "dataUri",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 212,
                          "src": "1713:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 230,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1724:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1713:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 228,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "1705:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1705:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 233,
                  "nodeType": "ExpressionStatement",
                  "src": "1705:21:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 241,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1797:40:1",
                        "subExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 235,
                                "name": "permissions",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 158,
                                "src": "1798:11:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$_$",
                                  "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                                }
                              },
                              "id": 237,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 236,
                                "name": "dataHash",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 208,
                                "src": "1810:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1798:21:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$",
                                "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                              }
                            },
                            "id": 239,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 238,
                              "name": "viewer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 210,
                              "src": "1820:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1798:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permission_$134_storage",
                              "typeString": "struct LinniaPermissions.Permission storage ref"
                            }
                          },
                          "id": 240,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "canAccess",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 131,
                          "src": "1798:39:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 234,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "1789:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1789:49:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 243,
                  "nodeType": "ExpressionStatement",
                  "src": "1789:49:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 253,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 244,
                          "name": "permissions",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 158,
                          "src": "1848:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$_$",
                            "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                          }
                        },
                        "id": 247,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 245,
                          "name": "dataHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 208,
                          "src": "1860:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1848:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$",
                          "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                        }
                      },
                      "id": 248,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 246,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 210,
                        "src": "1870:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1848:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$134_storage",
                        "typeString": "struct LinniaPermissions.Permission storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 250,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1916:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "argumentTypes": null,
                          "id": 251,
                          "name": "dataUri",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 212,
                          "src": "1943:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 249,
                        "name": "Permission",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 134,
                        "src": "1880:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Permission_$134_storage_ptr_$",
                          "typeString": "type(struct LinniaPermissions.Permission storage pointer)"
                        }
                      },
                      "id": 252,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [
                        "canAccess",
                        "dataUri"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "1880:81:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$134_memory",
                        "typeString": "struct LinniaPermissions.Permission memory"
                      }
                    },
                    "src": "1848:113:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permission_$134_storage",
                      "typeString": "struct LinniaPermissions.Permission storage ref"
                    }
                  },
                  "id": 254,
                  "nodeType": "ExpressionStatement",
                  "src": "1848:113:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 256,
                        "name": "dataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 208,
                        "src": "1993:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 257,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1178,
                          "src": "2003:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 258,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2003:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 259,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 210,
                        "src": "2015:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 255,
                      "name": "LogAccessGranted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 142,
                      "src": "1976:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address,address)"
                      }
                    },
                    "id": 260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1976:46:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 261,
                  "nodeType": "EmitStatement",
                  "src": "1971:51:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 262,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2039:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 221,
                  "id": 263,
                  "nodeType": "Return",
                  "src": "2032:11:1"
                }
              ]
            },
            "documentation": "Give a viewer access to a linnia record\n Called by owner of the record.\n @param dataHash the data hash of the linnia record\n @param viewer the user being permissioned to view the data\n @param dataUri the ipfs path of the re-encrypted data",
            "id": 265,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 215,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 214,
                  "name": "onlyUser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 174,
                  "src": "1553:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1553:8:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 217,
                    "name": "dataHash",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 208,
                    "src": "1588:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 218,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 216,
                  "name": "onlyRecordOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 192,
                  "src": "1570:17:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1570:27:1"
              }
            ],
            "name": "grantAccess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 213,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 208,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 265,
                  "src": "1494:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 207,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1494:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 210,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 265,
                  "src": "1512:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 209,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1512:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 212,
                  "name": "dataUri",
                  "nodeType": "VariableDeclaration",
                  "scope": 265,
                  "src": "1528:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 211,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1528:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1493:51:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 220,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 265,
                  "src": "1632:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 219,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1632:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1631:6:1"
            },
            "scope": 310,
            "src": "1473:577:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 308,
              "nodeType": "Block",
              "src": "2459:313:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 280,
                              "name": "permissions",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 158,
                              "src": "2525:11:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$_$",
                                "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                              }
                            },
                            "id": 282,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 281,
                              "name": "dataHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 267,
                              "src": "2537:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2525:21:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$",
                              "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                            }
                          },
                          "id": 284,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 283,
                            "name": "viewer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 269,
                            "src": "2547:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2525:29:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permission_$134_storage",
                            "typeString": "struct LinniaPermissions.Permission storage ref"
                          }
                        },
                        "id": 285,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "canAccess",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 131,
                        "src": "2525:39:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 279,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "2517:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 286,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2517:48:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 287,
                  "nodeType": "ExpressionStatement",
                  "src": "2517:48:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 288,
                          "name": "permissions",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 158,
                          "src": "2575:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$_$",
                            "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                          }
                        },
                        "id": 291,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 289,
                          "name": "dataHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 267,
                          "src": "2587:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2575:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$134_storage_$",
                          "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                        }
                      },
                      "id": 292,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 290,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 269,
                        "src": "2597:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2575:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$134_storage",
                        "typeString": "struct LinniaPermissions.Permission storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 294,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2643:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 295,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2671:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 293,
                        "name": "Permission",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 134,
                        "src": "2607:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Permission_$134_storage_ptr_$",
                          "typeString": "type(struct LinniaPermissions.Permission storage pointer)"
                        }
                      },
                      "id": 296,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [
                        "canAccess",
                        "dataUri"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "2607:76:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$134_memory",
                        "typeString": "struct LinniaPermissions.Permission memory"
                      }
                    },
                    "src": "2575:108:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permission_$134_storage",
                      "typeString": "struct LinniaPermissions.Permission storage ref"
                    }
                  },
                  "id": 298,
                  "nodeType": "ExpressionStatement",
                  "src": "2575:108:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 300,
                        "name": "dataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 267,
                        "src": "2715:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 301,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1178,
                          "src": "2725:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 302,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2725:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 303,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 269,
                        "src": "2737:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 299,
                      "name": "LogAccessRevoked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 150,
                      "src": "2698:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address,address)"
                      }
                    },
                    "id": 304,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2698:46:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 305,
                  "nodeType": "EmitStatement",
                  "src": "2693:51:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 306,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2761:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 278,
                  "id": 307,
                  "nodeType": "Return",
                  "src": "2754:11:1"
                }
              ]
            },
            "documentation": "Revoke a viewer access to a linnia record\n Note that this does not necessarily remove the file from storage\n @param dataHash the data hash of the linnia record\n @param viewer the user that has permission to view the data",
            "id": 309,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 272,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 271,
                  "name": "onlyUser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 174,
                  "src": "2370:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2370:8:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 274,
                    "name": "dataHash",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 267,
                    "src": "2405:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 275,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 273,
                  "name": "onlyRecordOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 192,
                  "src": "2387:17:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2387:27:1"
              }
            ],
            "name": "revokeAccess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 267,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 309,
                  "src": "2328:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 266,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2328:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 269,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 309,
                  "src": "2346:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 268,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2346:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2327:34:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 278,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 277,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 309,
                  "src": "2449:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 276,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2449:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2448:6:1"
            },
            "scope": 310,
            "src": "2306:466:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 311,
        "src": "185:2589:1"
      }
    ],
    "src": "0:2775:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0x3ea4710dae647bd2dfcd68b8ec1ff8937a6ab72d",
      "transactionHash": "0xd32cc87498278bc65309051f04649b6bbc3c9a902997c92d7c6e39e3c7beb922"
    }
  },
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-06-03T04:08:51.054Z"
}
