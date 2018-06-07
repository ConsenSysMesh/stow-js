module.exports = {
  "contractName": "LinniaHub",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "usersContract",
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
      "constant": true,
      "inputs": [],
      "name": "permissionsContract",
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
      "constant": true,
      "inputs": [],
      "name": "recordsContract",
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
      "inputs": [],
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
          "indexed": false,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "to",
          "type": "address"
        }
      ],
      "name": "LogUsersContractSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "to",
          "type": "address"
        }
      ],
      "name": "LogRecordsContractSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "to",
          "type": "address"
        }
      ],
      "name": "LogPermissionsContractSet",
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
          "name": "_usersContract",
          "type": "address"
        }
      ],
      "name": "setUsersContract",
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
          "name": "_recordsContract",
          "type": "address"
        }
      ],
      "name": "setRecordsContract",
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
          "name": "_permissionsContract",
          "type": "address"
        }
      ],
      "name": "setPermissionsContract",
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
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610994806100606000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063142ebf3c1461009d5780638da5cb5b146100f4578063c60bdc7f1461014b578063cccb7c75146101a6578063d183ce74146101fd578063e5e1e62d14610258578063f2fde38b146102b3578063fc0d561e146102f6575b34801561009a57600080fd5b50005b3480156100a957600080fd5b506100b261034d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561010057600080fd5b50610109610373565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561015757600080fd5b5061018c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610398565b604051808215151515815260200191505060405180910390f35b3480156101b257600080fd5b506101bb6104fd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020957600080fd5b5061023e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610523565b604051808215151515815260200191505060405180910390f35b34801561026457600080fd5b50610299600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610688565b604051808215151515815260200191505060405180910390f35b3480156102bf57600080fd5b506102f4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107ed565b005b34801561030257600080fd5b5061030b610942565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103f657600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc3834b6a6bc9b4a5538ab1ee44dfee2fb113517bee43239c8a74dda600a2d0488184604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16001915050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561058157600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f1ff0355b14b79d86f4f21bb793eb52594d7042eceb82300fafcf98ac866b53728184604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16001915050919050565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106e657600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f84e234a166a8b8da8cfe867be159e3d188f9c528fc0aca6a2d02edbaed8fcde98184604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16001915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561084857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561088457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582074508d2472e9c868311e746ddb4a460ee4aadb8deeff0a5974da73f49a6695800029",
  "deployedBytecode": "0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063142ebf3c1461009d5780638da5cb5b146100f4578063c60bdc7f1461014b578063cccb7c75146101a6578063d183ce74146101fd578063e5e1e62d14610258578063f2fde38b146102b3578063fc0d561e146102f6575b34801561009a57600080fd5b50005b3480156100a957600080fd5b506100b261034d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561010057600080fd5b50610109610373565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561015757600080fd5b5061018c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610398565b604051808215151515815260200191505060405180910390f35b3480156101b257600080fd5b506101bb6104fd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020957600080fd5b5061023e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610523565b604051808215151515815260200191505060405180910390f35b34801561026457600080fd5b50610299600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610688565b604051808215151515815260200191505060405180910390f35b3480156102bf57600080fd5b506102f4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107ed565b005b34801561030257600080fd5b5061030b610942565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103f657600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc3834b6a6bc9b4a5538ab1ee44dfee2fb113517bee43239c8a74dda600a2d0488184604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16001915050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561058157600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f1ff0355b14b79d86f4f21bb793eb52594d7042eceb82300fafcf98ac866b53728184604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16001915050919050565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106e657600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f84e234a166a8b8da8cfe867be159e3d188f9c528fc0aca6a2d02edbaed8fcde98184604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16001915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561084857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561088457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582074508d2472e9c868311e746ddb4a460ee4aadb8deeff0a5974da73f49a6695800029",
  "sourceMap": "193:1344:0:-;;;540:24;8:9:-1;5:2;;;30:1;27;20:12;5:2;540:24:0;509:10:6;501:5;;:18;;;;;;;;;;;;;;;;;;193:1344:0;;;;;;",
  "deployedSourceMap": "193:1344:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;193:1344:0;;229:32;;8:9:-1;5:2;;;30:1;27;20:12;5:2;229:32:0;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:6;;;;;;;;;;;;;;;;;;;;;;;;;;;598:287:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;598:287:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;309:44;;8:9:-1;5:2;;;30:1;27;20:12;5:2;309:44:0;;;;;;;;;;;;;;;;;;;;;;;;;;;1200:335;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1200:335:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;891:303;;8:9:-1;5:2;;;30:1;27;20:12;5:2;891:303:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:174:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;832:174:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;267:36:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;267:36:0;;;;;;;;;;;;;;;;;;;;;;;;;;;229:32;;;;;;;;;;;;;:::o;238:20:6:-;;;;;;;;;;;;;:::o;598:287:0:-;704:4;724:12;653:5:6;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;747:13:0;;;;;;;;;;;724:37;;787:14;771:13;;:30;;;;;;;;;;;;;;;;;;816:41;836:4;842:14;816:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;874:4;867:11;;598:287;;;;:::o;309:44::-;;;;;;;;;;;;;:::o;1200:335::-;1324:4;1344:12;653:5:6;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1367:19:0;;;;;;;;;;;1344:43;;1419:20;1397:19;;:42;;;;;;;;;;;;;;;;;;1454:53;1480:4;1486:20;1454:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1524:4;1517:11;;1200:335;;;;:::o;891:303::-;1003:4;1023:12;653:5:6;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1046:15:0;;;;;;;;;;;1023:39;;1090:16;1072:15;;:34;;;;;;;;;;;;;;;;;;1121:45;1143:4;1149:16;1121:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1183:4;1176:11;;891:303;;;;:::o;832:174:6:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;970:8;942:37;;963:5;;;;;;;;;;;942:37;;;;;;;;;;;;993:8;985:5;;:16;;;;;;;;;;;;;;;;;;832:174;:::o;267:36:0:-;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.23;\n\nimport \"node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport \"./LinniaUsers.sol\";\nimport \"./LinniaRecords.sol\";\nimport \"./LinniaPermissions.sol\";\n\n\ncontract LinniaHub is Ownable {\n    LinniaUsers public usersContract;\n    LinniaRecords public recordsContract;\n    LinniaPermissions public permissionsContract;\n\n    event LogUsersContractSet(address from, address to);\n    event LogRecordsContractSet(address from, address to);\n    event LogPermissionsContractSet(address from, address to);\n\n    constructor() public { }\n\n    function () public { }\n\n    function setUsersContract(LinniaUsers _usersContract)\n        onlyOwner\n        external\n        returns (bool)\n    {\n        address prev = address(usersContract);\n        usersContract = _usersContract;\n        emit LogUsersContractSet(prev, _usersContract);\n        return true;\n    }\n\n    function setRecordsContract(LinniaRecords _recordsContract)\n        onlyOwner\n        external\n        returns (bool)\n    {\n        address prev = address(recordsContract);\n        recordsContract = _recordsContract;\n        emit LogRecordsContractSet(prev, _recordsContract);\n        return true;\n    }\n\n    function setPermissionsContract(LinniaPermissions _permissionsContract)\n        onlyOwner\n        external\n        returns (bool)\n    {\n        address prev = address(permissionsContract);\n        permissionsContract = _permissionsContract;\n        emit LogPermissionsContractSet(prev, _permissionsContract);\n        return true;\n    }\n}\n",
  "sourcePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaHub.sol",
  "ast": {
    "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaHub.sol",
    "exportedSymbols": {
      "LinniaHub": [
        121
      ]
    },
    "id": 122,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 122,
        "sourceUnit": 1164,
        "src": "26:72:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaUsers.sol",
        "file": "./LinniaUsers.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 122,
        "sourceUnit": 955,
        "src": "99:27:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaRecords.sol",
        "file": "./LinniaRecords.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 122,
        "sourceUnit": 811,
        "src": "127:29:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaPermissions.sol",
        "file": "./LinniaPermissions.sol",
        "id": 5,
        "nodeType": "ImportDirective",
        "scope": 122,
        "sourceUnit": 311,
        "src": "157:33:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 6,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1163,
              "src": "215:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1163",
                "typeString": "contract Ownable"
              }
            },
            "id": 7,
            "nodeType": "InheritanceSpecifier",
            "src": "215:7:0"
          }
        ],
        "contractDependencies": [
          1163
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 121,
        "linearizedBaseContracts": [
          121,
          1163
        ],
        "name": "LinniaHub",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9,
            "name": "usersContract",
            "nodeType": "VariableDeclaration",
            "scope": 121,
            "src": "229:32:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaUsers_$954",
              "typeString": "contract LinniaUsers"
            },
            "typeName": {
              "contractScope": null,
              "id": 8,
              "name": "LinniaUsers",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 954,
              "src": "229:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaUsers_$954",
                "typeString": "contract LinniaUsers"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 11,
            "name": "recordsContract",
            "nodeType": "VariableDeclaration",
            "scope": 121,
            "src": "267:36:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaRecords_$810",
              "typeString": "contract LinniaRecords"
            },
            "typeName": {
              "contractScope": null,
              "id": 10,
              "name": "LinniaRecords",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 810,
              "src": "267:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaRecords_$810",
                "typeString": "contract LinniaRecords"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 13,
            "name": "permissionsContract",
            "nodeType": "VariableDeclaration",
            "scope": 121,
            "src": "309:44:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaPermissions_$310",
              "typeString": "contract LinniaPermissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 12,
              "name": "LinniaPermissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 310,
              "src": "309:17:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                "typeString": "contract LinniaPermissions"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 19,
            "name": "LogUsersContractSet",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 18,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15,
                  "indexed": false,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 19,
                  "src": "386:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "386:7:0",
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
                  "id": 17,
                  "indexed": false,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 19,
                  "src": "400:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "400:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "385:26:0"
            },
            "src": "360:52:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 25,
            "name": "LogRecordsContractSet",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 24,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "indexed": false,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 25,
                  "src": "445:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:0",
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
                  "id": 23,
                  "indexed": false,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 25,
                  "src": "459:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 22,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "459:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "444:26:0"
            },
            "src": "417:54:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 31,
            "name": "LogPermissionsContractSet",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 30,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27,
                  "indexed": false,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "508:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "508:7:0",
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
                  "id": 29,
                  "indexed": false,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "522:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "522:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "507:26:0"
            },
            "src": "476:58:0"
          },
          {
            "body": {
              "id": 34,
              "nodeType": "Block",
              "src": "561:3:0",
              "statements": []
            },
            "documentation": null,
            "id": 35,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "551:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "561:0:0"
            },
            "scope": 121,
            "src": "540:24:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 38,
              "nodeType": "Block",
              "src": "589:3:0",
              "statements": []
            },
            "documentation": null,
            "id": 39,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 36,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "579:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 37,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "589:0:0"
            },
            "scope": 121,
            "src": "570:22:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 65,
              "nodeType": "Block",
              "src": "714:171:0",
              "statements": [
                {
                  "assignments": [
                    49
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 49,
                      "name": "prev",
                      "nodeType": "VariableDeclaration",
                      "scope": 66,
                      "src": "724:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 48,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "724:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 53,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 51,
                        "name": "usersContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9,
                        "src": "747:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaUsers_$954",
                          "typeString": "contract LinniaUsers"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_LinniaUsers_$954",
                          "typeString": "contract LinniaUsers"
                        }
                      ],
                      "id": 50,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "739:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 52,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "739:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "724:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 56,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 54,
                      "name": "usersContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9,
                      "src": "771:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaUsers_$954",
                        "typeString": "contract LinniaUsers"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 55,
                      "name": "_usersContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41,
                      "src": "787:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaUsers_$954",
                        "typeString": "contract LinniaUsers"
                      }
                    },
                    "src": "771:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaUsers_$954",
                      "typeString": "contract LinniaUsers"
                    }
                  },
                  "id": 57,
                  "nodeType": "ExpressionStatement",
                  "src": "771:30:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 59,
                        "name": "prev",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "836:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 60,
                        "name": "_usersContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "842:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaUsers_$954",
                          "typeString": "contract LinniaUsers"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_contract$_LinniaUsers_$954",
                          "typeString": "contract LinniaUsers"
                        }
                      ],
                      "id": 58,
                      "name": "LogUsersContractSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19,
                      "src": "816:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 61,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "816:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62,
                  "nodeType": "EmitStatement",
                  "src": "811:46:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 63,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "874:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 47,
                  "id": 64,
                  "nodeType": "Return",
                  "src": "867:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 66,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 44,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 43,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1137,
                  "src": "660:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "660:9:0"
              }
            ],
            "name": "setUsersContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 42,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41,
                  "name": "_usersContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "624:26:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaUsers_$954",
                    "typeString": "contract LinniaUsers"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 40,
                    "name": "LinniaUsers",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 954,
                    "src": "624:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaUsers_$954",
                      "typeString": "contract LinniaUsers"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "623:28:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 47,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "704:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 45,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "704:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "703:6:0"
            },
            "scope": 121,
            "src": "598:287:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 92,
              "nodeType": "Block",
              "src": "1013:181:0",
              "statements": [
                {
                  "assignments": [
                    76
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 76,
                      "name": "prev",
                      "nodeType": "VariableDeclaration",
                      "scope": 93,
                      "src": "1023:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 75,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1023:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 80,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "recordsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11,
                        "src": "1046:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaRecords_$810",
                          "typeString": "contract LinniaRecords"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_LinniaRecords_$810",
                          "typeString": "contract LinniaRecords"
                        }
                      ],
                      "id": 77,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1038:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 79,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1038:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1023:39:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 81,
                      "name": "recordsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "1072:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaRecords_$810",
                        "typeString": "contract LinniaRecords"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 82,
                      "name": "_recordsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68,
                      "src": "1090:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaRecords_$810",
                        "typeString": "contract LinniaRecords"
                      }
                    },
                    "src": "1072:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaRecords_$810",
                      "typeString": "contract LinniaRecords"
                    }
                  },
                  "id": 84,
                  "nodeType": "ExpressionStatement",
                  "src": "1072:34:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 86,
                        "name": "prev",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "1143:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "_recordsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68,
                        "src": "1149:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaRecords_$810",
                          "typeString": "contract LinniaRecords"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_contract$_LinniaRecords_$810",
                          "typeString": "contract LinniaRecords"
                        }
                      ],
                      "id": 85,
                      "name": "LogRecordsContractSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25,
                      "src": "1121:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 88,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1121:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 89,
                  "nodeType": "EmitStatement",
                  "src": "1116:50:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1183:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 74,
                  "id": 91,
                  "nodeType": "Return",
                  "src": "1176:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 93,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 71,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 70,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1137,
                  "src": "959:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "959:9:0"
              }
            ],
            "name": "setRecordsContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 69,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68,
                  "name": "_recordsContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "919:30:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaRecords_$810",
                    "typeString": "contract LinniaRecords"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 67,
                    "name": "LinniaRecords",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 810,
                    "src": "919:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaRecords_$810",
                      "typeString": "contract LinniaRecords"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "918:32:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 74,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 73,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "1003:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1003:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1002:6:0"
            },
            "scope": 121,
            "src": "891:303:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 119,
              "nodeType": "Block",
              "src": "1334:201:0",
              "statements": [
                {
                  "assignments": [
                    103
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 103,
                      "name": "prev",
                      "nodeType": "VariableDeclaration",
                      "scope": 120,
                      "src": "1344:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 102,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1344:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 107,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 105,
                        "name": "permissionsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13,
                        "src": "1367:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                          "typeString": "contract LinniaPermissions"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                          "typeString": "contract LinniaPermissions"
                        }
                      ],
                      "id": 104,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1359:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 106,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1359:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1344:43:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 108,
                      "name": "permissionsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13,
                      "src": "1397:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                        "typeString": "contract LinniaPermissions"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 109,
                      "name": "_permissionsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 95,
                      "src": "1419:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                        "typeString": "contract LinniaPermissions"
                      }
                    },
                    "src": "1397:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                      "typeString": "contract LinniaPermissions"
                    }
                  },
                  "id": 111,
                  "nodeType": "ExpressionStatement",
                  "src": "1397:42:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 113,
                        "name": "prev",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 103,
                        "src": "1480:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "_permissionsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "1486:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                          "typeString": "contract LinniaPermissions"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                          "typeString": "contract LinniaPermissions"
                        }
                      ],
                      "id": 112,
                      "name": "LogPermissionsContractSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31,
                      "src": "1454:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1454:53:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 116,
                  "nodeType": "EmitStatement",
                  "src": "1449:58:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1524:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 101,
                  "id": 118,
                  "nodeType": "Return",
                  "src": "1517:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 120,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 98,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 97,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1137,
                  "src": "1280:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1280:9:0"
              }
            ],
            "name": "setPermissionsContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 96,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 95,
                  "name": "_permissionsContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "1232:38:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                    "typeString": "contract LinniaPermissions"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 94,
                    "name": "LinniaPermissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 310,
                    "src": "1232:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                      "typeString": "contract LinniaPermissions"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1231:40:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 100,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "1324:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 99,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1323:6:0"
            },
            "scope": 121,
            "src": "1200:335:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 122,
        "src": "193:1344:0"
      }
    ],
    "src": "0:1538:0"
  },
  "legacyAST": {
    "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaHub.sol",
    "exportedSymbols": {
      "LinniaHub": [
        121
      ]
    },
    "id": 122,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 122,
        "sourceUnit": 1164,
        "src": "26:72:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaUsers.sol",
        "file": "./LinniaUsers.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 122,
        "sourceUnit": 955,
        "src": "99:27:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaRecords.sol",
        "file": "./LinniaRecords.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 122,
        "sourceUnit": 811,
        "src": "127:29:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaPermissions.sol",
        "file": "./LinniaPermissions.sol",
        "id": 5,
        "nodeType": "ImportDirective",
        "scope": 122,
        "sourceUnit": 311,
        "src": "157:33:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 6,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1163,
              "src": "215:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1163",
                "typeString": "contract Ownable"
              }
            },
            "id": 7,
            "nodeType": "InheritanceSpecifier",
            "src": "215:7:0"
          }
        ],
        "contractDependencies": [
          1163
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 121,
        "linearizedBaseContracts": [
          121,
          1163
        ],
        "name": "LinniaHub",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9,
            "name": "usersContract",
            "nodeType": "VariableDeclaration",
            "scope": 121,
            "src": "229:32:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaUsers_$954",
              "typeString": "contract LinniaUsers"
            },
            "typeName": {
              "contractScope": null,
              "id": 8,
              "name": "LinniaUsers",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 954,
              "src": "229:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaUsers_$954",
                "typeString": "contract LinniaUsers"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 11,
            "name": "recordsContract",
            "nodeType": "VariableDeclaration",
            "scope": 121,
            "src": "267:36:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaRecords_$810",
              "typeString": "contract LinniaRecords"
            },
            "typeName": {
              "contractScope": null,
              "id": 10,
              "name": "LinniaRecords",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 810,
              "src": "267:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaRecords_$810",
                "typeString": "contract LinniaRecords"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 13,
            "name": "permissionsContract",
            "nodeType": "VariableDeclaration",
            "scope": 121,
            "src": "309:44:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaPermissions_$310",
              "typeString": "contract LinniaPermissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 12,
              "name": "LinniaPermissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 310,
              "src": "309:17:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                "typeString": "contract LinniaPermissions"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 19,
            "name": "LogUsersContractSet",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 18,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15,
                  "indexed": false,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 19,
                  "src": "386:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "386:7:0",
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
                  "id": 17,
                  "indexed": false,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 19,
                  "src": "400:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "400:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "385:26:0"
            },
            "src": "360:52:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 25,
            "name": "LogRecordsContractSet",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 24,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "indexed": false,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 25,
                  "src": "445:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:0",
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
                  "id": 23,
                  "indexed": false,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 25,
                  "src": "459:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 22,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "459:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "444:26:0"
            },
            "src": "417:54:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 31,
            "name": "LogPermissionsContractSet",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 30,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27,
                  "indexed": false,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "508:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "508:7:0",
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
                  "id": 29,
                  "indexed": false,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "522:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "522:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "507:26:0"
            },
            "src": "476:58:0"
          },
          {
            "body": {
              "id": 34,
              "nodeType": "Block",
              "src": "561:3:0",
              "statements": []
            },
            "documentation": null,
            "id": 35,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "551:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "561:0:0"
            },
            "scope": 121,
            "src": "540:24:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 38,
              "nodeType": "Block",
              "src": "589:3:0",
              "statements": []
            },
            "documentation": null,
            "id": 39,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 36,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "579:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 37,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "589:0:0"
            },
            "scope": 121,
            "src": "570:22:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 65,
              "nodeType": "Block",
              "src": "714:171:0",
              "statements": [
                {
                  "assignments": [
                    49
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 49,
                      "name": "prev",
                      "nodeType": "VariableDeclaration",
                      "scope": 66,
                      "src": "724:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 48,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "724:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 53,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 51,
                        "name": "usersContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9,
                        "src": "747:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaUsers_$954",
                          "typeString": "contract LinniaUsers"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_LinniaUsers_$954",
                          "typeString": "contract LinniaUsers"
                        }
                      ],
                      "id": 50,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "739:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 52,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "739:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "724:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 56,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 54,
                      "name": "usersContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9,
                      "src": "771:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaUsers_$954",
                        "typeString": "contract LinniaUsers"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 55,
                      "name": "_usersContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41,
                      "src": "787:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaUsers_$954",
                        "typeString": "contract LinniaUsers"
                      }
                    },
                    "src": "771:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaUsers_$954",
                      "typeString": "contract LinniaUsers"
                    }
                  },
                  "id": 57,
                  "nodeType": "ExpressionStatement",
                  "src": "771:30:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 59,
                        "name": "prev",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "836:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 60,
                        "name": "_usersContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "842:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaUsers_$954",
                          "typeString": "contract LinniaUsers"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_contract$_LinniaUsers_$954",
                          "typeString": "contract LinniaUsers"
                        }
                      ],
                      "id": 58,
                      "name": "LogUsersContractSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19,
                      "src": "816:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 61,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "816:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62,
                  "nodeType": "EmitStatement",
                  "src": "811:46:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 63,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "874:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 47,
                  "id": 64,
                  "nodeType": "Return",
                  "src": "867:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 66,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 44,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 43,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1137,
                  "src": "660:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "660:9:0"
              }
            ],
            "name": "setUsersContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 42,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41,
                  "name": "_usersContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "624:26:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaUsers_$954",
                    "typeString": "contract LinniaUsers"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 40,
                    "name": "LinniaUsers",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 954,
                    "src": "624:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaUsers_$954",
                      "typeString": "contract LinniaUsers"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "623:28:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 47,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "704:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 45,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "704:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "703:6:0"
            },
            "scope": 121,
            "src": "598:287:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 92,
              "nodeType": "Block",
              "src": "1013:181:0",
              "statements": [
                {
                  "assignments": [
                    76
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 76,
                      "name": "prev",
                      "nodeType": "VariableDeclaration",
                      "scope": 93,
                      "src": "1023:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 75,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1023:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 80,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "recordsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11,
                        "src": "1046:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaRecords_$810",
                          "typeString": "contract LinniaRecords"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_LinniaRecords_$810",
                          "typeString": "contract LinniaRecords"
                        }
                      ],
                      "id": 77,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1038:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 79,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1038:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1023:39:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 81,
                      "name": "recordsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "1072:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaRecords_$810",
                        "typeString": "contract LinniaRecords"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 82,
                      "name": "_recordsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68,
                      "src": "1090:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaRecords_$810",
                        "typeString": "contract LinniaRecords"
                      }
                    },
                    "src": "1072:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaRecords_$810",
                      "typeString": "contract LinniaRecords"
                    }
                  },
                  "id": 84,
                  "nodeType": "ExpressionStatement",
                  "src": "1072:34:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 86,
                        "name": "prev",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "1143:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "_recordsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68,
                        "src": "1149:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaRecords_$810",
                          "typeString": "contract LinniaRecords"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_contract$_LinniaRecords_$810",
                          "typeString": "contract LinniaRecords"
                        }
                      ],
                      "id": 85,
                      "name": "LogRecordsContractSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25,
                      "src": "1121:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 88,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1121:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 89,
                  "nodeType": "EmitStatement",
                  "src": "1116:50:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1183:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 74,
                  "id": 91,
                  "nodeType": "Return",
                  "src": "1176:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 93,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 71,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 70,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1137,
                  "src": "959:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "959:9:0"
              }
            ],
            "name": "setRecordsContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 69,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68,
                  "name": "_recordsContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "919:30:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaRecords_$810",
                    "typeString": "contract LinniaRecords"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 67,
                    "name": "LinniaRecords",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 810,
                    "src": "919:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaRecords_$810",
                      "typeString": "contract LinniaRecords"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "918:32:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 74,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 73,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "1003:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1003:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1002:6:0"
            },
            "scope": 121,
            "src": "891:303:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 119,
              "nodeType": "Block",
              "src": "1334:201:0",
              "statements": [
                {
                  "assignments": [
                    103
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 103,
                      "name": "prev",
                      "nodeType": "VariableDeclaration",
                      "scope": 120,
                      "src": "1344:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 102,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1344:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 107,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 105,
                        "name": "permissionsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13,
                        "src": "1367:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                          "typeString": "contract LinniaPermissions"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                          "typeString": "contract LinniaPermissions"
                        }
                      ],
                      "id": 104,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1359:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 106,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1359:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1344:43:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 108,
                      "name": "permissionsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13,
                      "src": "1397:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                        "typeString": "contract LinniaPermissions"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 109,
                      "name": "_permissionsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 95,
                      "src": "1419:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                        "typeString": "contract LinniaPermissions"
                      }
                    },
                    "src": "1397:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                      "typeString": "contract LinniaPermissions"
                    }
                  },
                  "id": 111,
                  "nodeType": "ExpressionStatement",
                  "src": "1397:42:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 113,
                        "name": "prev",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 103,
                        "src": "1480:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "_permissionsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "1486:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                          "typeString": "contract LinniaPermissions"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                          "typeString": "contract LinniaPermissions"
                        }
                      ],
                      "id": 112,
                      "name": "LogPermissionsContractSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31,
                      "src": "1454:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1454:53:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 116,
                  "nodeType": "EmitStatement",
                  "src": "1449:58:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1524:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 101,
                  "id": 118,
                  "nodeType": "Return",
                  "src": "1517:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 120,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 98,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 97,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1137,
                  "src": "1280:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1280:9:0"
              }
            ],
            "name": "setPermissionsContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 96,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 95,
                  "name": "_permissionsContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "1232:38:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                    "typeString": "contract LinniaPermissions"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 94,
                    "name": "LinniaPermissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 310,
                    "src": "1232:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaPermissions_$310",
                      "typeString": "contract LinniaPermissions"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1231:40:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 100,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "1324:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 99,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1323:6:0"
            },
            "scope": 121,
            "src": "1200:335:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 122,
        "src": "193:1344:0"
      }
    ],
    "src": "0:1538:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {
        "0xc3834b6a6bc9b4a5538ab1ee44dfee2fb113517bee43239c8a74dda600a2d048": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "to",
              "type": "address"
            }
          ],
          "name": "LogUsersContractSet",
          "type": "event"
        },
        "0x84e234a166a8b8da8cfe867be159e3d188f9c528fc0aca6a2d02edbaed8fcde9": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "to",
              "type": "address"
            }
          ],
          "name": "LogRecordsContractSet",
          "type": "event"
        },
        "0x1ff0355b14b79d86f4f21bb793eb52594d7042eceb82300fafcf98ac866b5372": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "to",
              "type": "address"
            }
          ],
          "name": "LogPermissionsContractSet",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
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
        }
      },
      "links": {},
      "address": "0x16b926511f04d06a709b448df71af4580428cf4d",
      "transactionHash": "0x6cc4521c0ed36bb494cb1d68cd63a0552b00e3901aeff516ae30d2642e6b1b0f"
    }
  },
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-06-03T04:08:51.044Z"
}
