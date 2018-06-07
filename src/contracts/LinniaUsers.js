module.exports = {
  "contractName": "LinniaUsers",
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
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "name": "exists",
          "type": "bool"
        },
        {
          "name": "registerBlocktime",
          "type": "uint256"
        },
        {
          "name": "provenance",
          "type": "uint256"
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
          "name": "user",
          "type": "address"
        }
      ],
      "name": "LogUserRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "provenance",
          "type": "uint256"
        }
      ],
      "name": "LogProvenanceChanged",
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
      "inputs": [],
      "name": "register",
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
          "name": "user",
          "type": "address"
        },
        {
          "name": "provenance",
          "type": "uint256"
        }
      ],
      "name": "setProvenance",
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
      "constant": true,
      "inputs": [
        {
          "name": "user",
          "type": "address"
        }
      ],
      "name": "isUser",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "user",
          "type": "address"
        }
      ],
      "name": "provenanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405160208061090f83398101806040528101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061084b806100c46000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631aa3a0081461009d578063365a86fc146100cc5780634209fff1146101235780636245eb071461017e5780638da5cb5b146101e3578063a87430ba1461023a578063dbe3e92f146102a3578063f2fde38b146102fa575b34801561009a57600080fd5b50005b3480156100a957600080fd5b506100b261033d565b604051808215151515815260200191505060405180910390f35b3480156100d857600080fd5b506100e1610434565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561012f57600080fd5b50610164600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061045a565b604051808215151515815260200191505060405180910390f35b34801561018a57600080fd5b506101c9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104b3565b604051808215151515815260200191505060405180910390f35b3480156101ef57600080fd5b506101f86105c3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561024657600080fd5b5061027b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105e8565b6040518084151515158152602001838152602001828152602001935050505060405180910390f35b3480156102af57600080fd5b506102e4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061061f565b6040518082815260200191505060405180910390f35b34801561030657600080fd5b5061033b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106ca565b005b60006103483361045a565b15151561035457600080fd5b6060604051908101604052806001151581526020014381526020016000815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160010155604082015181600201559050503373ffffffffffffffffffffffffffffffffffffffff167fa28576aa71409e890d90a3b4642d4d95b7f26dc5b969e9b915067e531b73938d60405160405180910390a26001905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff169050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561051057600080fd5b6105198361045a565b151561052457600080fd5b81600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055508273ffffffffffffffffffffffffffffffffffffffff167f15ec838ecd3ec76b628a80f7595d162531520204b63c00267d4295ccc6de5e5c836040518082815260200191505060405180910390a26001905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154905083565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16156106c057600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015490506106c5565b600090505b919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561072557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561076157600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820934acb2361d7f87fdecbc7bdf88b588688b8b17cb9a2481d9100c5ddb0a369db0029",
  "deployedBytecode": "0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631aa3a0081461009d578063365a86fc146100cc5780634209fff1146101235780636245eb071461017e5780638da5cb5b146101e3578063a87430ba1461023a578063dbe3e92f146102a3578063f2fde38b146102fa575b34801561009a57600080fd5b50005b3480156100a957600080fd5b506100b261033d565b604051808215151515815260200191505060405180910390f35b3480156100d857600080fd5b506100e1610434565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561012f57600080fd5b50610164600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061045a565b604051808215151515815260200191505060405180910390f35b34801561018a57600080fd5b506101c9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104b3565b604051808215151515815260200191505060405180910390f35b3480156101ef57600080fd5b506101f86105c3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561024657600080fd5b5061027b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105e8565b6040518084151515158152602001838152602001828152602001935050505060405180910390f35b3480156102af57600080fd5b506102e4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061061f565b6040518082815260200191505060405180910390f35b34801561030657600080fd5b5061033b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106ca565b005b60006103483361045a565b15151561035457600080fd5b6060604051908101604052806001151581526020014381526020016000815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160010155604082015181600201559050503373ffffffffffffffffffffffffffffffffffffffff167fa28576aa71409e890d90a3b4642d4d95b7f26dc5b969e9b915067e531b73938d60405160405180910390a26001905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff169050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561051057600080fd5b6105198361045a565b151561052457600080fd5b81600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055508273ffffffffffffffffffffffffffffffffffffffff167f15ec838ecd3ec76b628a80f7595d162531520204b63c00267d4295ccc6de5e5c836040518082815260200191505060405180910390a26001905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154905083565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16156106c057600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015490506106c5565b600090505b919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561072557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561076157600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820934acb2361d7f87fdecbc7bdf88b588688b8b17cb9a2481d9100c5ddb0a369db0029",
  "sourceMap": "127:1499:3:-;;;461:62;8:9:-1;5:2;;;30:1;27;20:12;5:2;461:62:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;509:10:6;501:5;;:18;;;;;;;;;;;;;;;;;;512:4:3;506:3;;:10;;;;;;;;;;;;;;;;;;461:62;127:1499;;;;;;",
  "deployedSourceMap": "127:1499:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;127:1499:3;;674:298;;8:9:-1;5:2;;;30:1;27;20:12;5:2;674:298:3;;;;;;;;;;;;;;;;;;;;;;;;;;;391:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;391:20:3;;;;;;;;;;;;;;;;;;;;;;;;;;;1323:99;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1323:99:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1044:245;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1044:245:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:6;;;;;;;;;;;;;;;;;;;;;;;;;;;417:37:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;417:37:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1428:196;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1428:196:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:174:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;832:174:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;674:298:3;712:4;737:18;744:10;737:6;:18::i;:::-;736:19;728:28;;;;;;;;786:114;;;;;;;;;813:4;786:114;;;;;;850:12;786:114;;;;888:1;786:114;;;766:5;:17;772:10;766:17;;;;;;;;;;;;;;;:134;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;933:10;915:29;;;;;;;;;;;;961:4;954:11;;674:298;:::o;391:20::-;;;;;;;;;;;;;:::o;1323:99::-;1374:4;1397:5;:11;1403:4;1397:11;;;;;;;;;;;;;;;:18;;;;;;;;;;;;1390:25;;1323:99;;;:::o;1044:245::-;1126:4;653:5:6;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1150:12:3;1157:4;1150:6;:12::i;:::-;1142:21;;;;;;;;1198:10;1173:5;:11;1179:4;1173:11;;;;;;;;;;;;;;;:22;;:35;;;;1244:4;1223:38;;;1250:10;1223:38;;;;;;;;;;;;;;;;;;1278:4;1271:11;;1044:245;;;;:::o;238:20:6:-;;;;;;;;;;;;;:::o;417:37:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1428:196::-;1485:4;1505:5;:11;1511:4;1505:11;;;;;;;;;;;;;;;:18;;;;;;;;;;;;1501:117;;;1546:5;:11;1552:4;1546:11;;;;;;;;;;;;;;;:22;;;1539:29;;;;1501:117;1606:1;1599:8;;1428:196;;;;:::o;832:174:6:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;970:8;942:37;;963:5;;;;;;;;;;;942:37;;;;;;;;;;;;993:8;985:5;;:16;;;;;;;;;;;;;;;;;;832:174;:::o",
  "source": "pragma solidity ^0.4.23;\n\nimport \"node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport \"./LinniaHub.sol\";\n\n\ncontract LinniaUsers is Ownable {\n    struct User {\n        bool exists;\n        uint registerBlocktime;\n        uint provenance;\n    }\n\n    event LogUserRegistered(address indexed user);\n    event LogProvenanceChanged(address indexed user, uint provenance);\n\n    LinniaHub public hub;\n    mapping(address => User) public users;\n\n    constructor(LinniaHub _hub) public {\n        hub = _hub;\n    }\n\n    /* Fallback function */\n    function () public { }\n\n    /* External functions */\n\n    // register allows any user to self register on Linnia\n    function register() external returns (bool) {\n        require(!isUser(msg.sender));\n        users[msg.sender] = User({\n            exists: true,\n            registerBlocktime: block.number,\n            provenance: 0\n        });\n        emit LogUserRegistered(msg.sender);\n        return true;\n    }\n\n    // setProvenance allows admin to set the provenance of a user\n    function setProvenance(address user, uint provenance) onlyOwner external returns (bool) {\n        require(isUser(user));\n        users[user].provenance = provenance;\n        emit LogProvenanceChanged(user, provenance);\n        return true;\n    }\n\n    /* Public functions */\n\n    function isUser(address user) public view returns (bool) {\n        return users[user].exists;\n    }\n\n    function provenanceOf(address user) public view returns (uint) {\n        if (users[user].exists) {\n            return users[user].provenance;\n        } else {\n            return 0;\n        }\n    }\n}\n",
  "sourcePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaUsers.sol",
  "ast": {
    "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaUsers.sol",
    "exportedSymbols": {
      "LinniaUsers": [
        954
      ]
    },
    "id": 955,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 812,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "absolutePath": "node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 813,
        "nodeType": "ImportDirective",
        "scope": 955,
        "sourceUnit": 1164,
        "src": "26:72:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaHub.sol",
        "file": "./LinniaHub.sol",
        "id": 814,
        "nodeType": "ImportDirective",
        "scope": 955,
        "sourceUnit": 122,
        "src": "99:25:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 815,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1163,
              "src": "151:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1163",
                "typeString": "contract Ownable"
              }
            },
            "id": 816,
            "nodeType": "InheritanceSpecifier",
            "src": "151:7:3"
          }
        ],
        "contractDependencies": [
          1163
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 954,
        "linearizedBaseContracts": [
          954,
          1163
        ],
        "name": "LinniaUsers",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "LinniaUsers.User",
            "id": 823,
            "members": [
              {
                "constant": false,
                "id": 818,
                "name": "exists",
                "nodeType": "VariableDeclaration",
                "scope": 823,
                "src": "187:11:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 817,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "187:4:3",
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
                "id": 820,
                "name": "registerBlocktime",
                "nodeType": "VariableDeclaration",
                "scope": 823,
                "src": "208:22:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 819,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "208:4:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 822,
                "name": "provenance",
                "nodeType": "VariableDeclaration",
                "scope": 823,
                "src": "240:15:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 821,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "240:4:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "User",
            "nodeType": "StructDefinition",
            "scope": 954,
            "src": "165:97:3",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 827,
            "name": "LogUserRegistered",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 826,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 825,
                  "indexed": true,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 827,
                  "src": "292:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 824,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "292:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "291:22:3"
            },
            "src": "268:46:3"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 833,
            "name": "LogProvenanceChanged",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 829,
                  "indexed": true,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 833,
                  "src": "346:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 828,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "346:7:3",
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
                  "id": 831,
                  "indexed": false,
                  "name": "provenance",
                  "nodeType": "VariableDeclaration",
                  "scope": 833,
                  "src": "368:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 830,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "368:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "345:39:3"
            },
            "src": "319:66:3"
          },
          {
            "constant": false,
            "id": 835,
            "name": "hub",
            "nodeType": "VariableDeclaration",
            "scope": 954,
            "src": "391:20:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaHub_$121",
              "typeString": "contract LinniaHub"
            },
            "typeName": {
              "contractScope": null,
              "id": 834,
              "name": "LinniaHub",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 121,
              "src": "391:9:3",
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
            "id": 839,
            "name": "users",
            "nodeType": "VariableDeclaration",
            "scope": 954,
            "src": "417:37:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$823_storage_$",
              "typeString": "mapping(address => struct LinniaUsers.User)"
            },
            "typeName": {
              "id": 838,
              "keyType": {
                "id": 836,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "425:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "417:24:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$823_storage_$",
                "typeString": "mapping(address => struct LinniaUsers.User)"
              },
              "valueType": {
                "contractScope": null,
                "id": 837,
                "name": "User",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 823,
                "src": "436:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_User_$823_storage_ptr",
                  "typeString": "struct LinniaUsers.User"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 848,
              "nodeType": "Block",
              "src": "496:27:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 846,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 844,
                      "name": "hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 835,
                      "src": "506:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$121",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 845,
                      "name": "_hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 841,
                      "src": "512:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$121",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "src": "506:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$121",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "id": 847,
                  "nodeType": "ExpressionStatement",
                  "src": "506:10:3"
                }
              ]
            },
            "documentation": null,
            "id": 849,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 841,
                  "name": "_hub",
                  "nodeType": "VariableDeclaration",
                  "scope": 849,
                  "src": "473:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaHub_$121",
                    "typeString": "contract LinniaHub"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 840,
                    "name": "LinniaHub",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 121,
                    "src": "473:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$121",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "472:16:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 843,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "496:0:3"
            },
            "scope": 954,
            "src": "461:62:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 852,
              "nodeType": "Block",
              "src": "576:3:3",
              "statements": []
            },
            "documentation": null,
            "id": 853,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 850,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "566:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 851,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "576:0:3"
            },
            "scope": 954,
            "src": "557:22:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 885,
              "nodeType": "Block",
              "src": "718:254:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 863,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "736:19:3",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 860,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1178,
                                "src": "744:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 861,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "744:10:3",
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
                            "id": 859,
                            "name": "isUser",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 931,
                            "src": "737:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view returns (bool)"
                            }
                          },
                          "id": 862,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "737:18:3",
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
                      "id": 858,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "728:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 864,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "728:28:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 865,
                  "nodeType": "ExpressionStatement",
                  "src": "728:28:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 866,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 839,
                        "src": "766:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$823_storage_$",
                          "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                        }
                      },
                      "id": 869,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 867,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1178,
                          "src": "772:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 868,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "772:10:3",
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
                      "src": "766:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$823_storage",
                        "typeString": "struct LinniaUsers.User storage ref"
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
                          "id": 871,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "813:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 872,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1168,
                            "src": "850:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 873,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "number",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "850:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 874,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "888:1:3",
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
                        "id": 870,
                        "name": "User",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 823,
                        "src": "786:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_User_$823_storage_ptr_$",
                          "typeString": "type(struct LinniaUsers.User storage pointer)"
                        }
                      },
                      "id": 875,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [
                        "exists",
                        "registerBlocktime",
                        "provenance"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "786:114:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$823_memory",
                        "typeString": "struct LinniaUsers.User memory"
                      }
                    },
                    "src": "766:134:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_User_$823_storage",
                      "typeString": "struct LinniaUsers.User storage ref"
                    }
                  },
                  "id": 877,
                  "nodeType": "ExpressionStatement",
                  "src": "766:134:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 879,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1178,
                          "src": "933:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 880,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "933:10:3",
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
                      "id": 878,
                      "name": "LogUserRegistered",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 827,
                      "src": "915:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 881,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "915:29:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 882,
                  "nodeType": "EmitStatement",
                  "src": "910:34:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 883,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "961:4:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 857,
                  "id": 884,
                  "nodeType": "Return",
                  "src": "954:11:3"
                }
              ]
            },
            "documentation": null,
            "id": 886,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "register",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 854,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "691:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 856,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 886,
                  "src": "712:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 855,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "712:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "711:6:3"
            },
            "scope": 954,
            "src": "674:298:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 917,
              "nodeType": "Block",
              "src": "1132:157:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 899,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 888,
                            "src": "1157:4:3",
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
                          "id": 898,
                          "name": "isUser",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 931,
                          "src": "1150:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 900,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1150:12:3",
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
                      "id": 897,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "1142:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 901,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1142:21:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 902,
                  "nodeType": "ExpressionStatement",
                  "src": "1142:21:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 903,
                          "name": "users",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 839,
                          "src": "1173:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$823_storage_$",
                            "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                          }
                        },
                        "id": 905,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 904,
                          "name": "user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 888,
                          "src": "1179:4:3",
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
                        "src": "1173:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_User_$823_storage",
                          "typeString": "struct LinniaUsers.User storage ref"
                        }
                      },
                      "id": 906,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "provenance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 822,
                      "src": "1173:22:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 907,
                      "name": "provenance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 890,
                      "src": "1198:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1173:35:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 909,
                  "nodeType": "ExpressionStatement",
                  "src": "1173:35:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 911,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 888,
                        "src": "1244:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 912,
                        "name": "provenance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 890,
                        "src": "1250:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 910,
                      "name": "LogProvenanceChanged",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 833,
                      "src": "1223:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 913,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1223:38:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 914,
                  "nodeType": "EmitStatement",
                  "src": "1218:43:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 915,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1278:4:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 896,
                  "id": 916,
                  "nodeType": "Return",
                  "src": "1271:11:3"
                }
              ]
            },
            "documentation": null,
            "id": 918,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 893,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 892,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1137,
                  "src": "1098:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1098:9:3"
              }
            ],
            "name": "setProvenance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 888,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 918,
                  "src": "1067:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 887,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1067:7:3",
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
                  "id": 890,
                  "name": "provenance",
                  "nodeType": "VariableDeclaration",
                  "scope": 918,
                  "src": "1081:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 889,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1081:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1066:31:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 896,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 895,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 918,
                  "src": "1126:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 894,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1126:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1125:6:3"
            },
            "scope": 954,
            "src": "1044:245:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 930,
              "nodeType": "Block",
              "src": "1380:42:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 925,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 839,
                        "src": "1397:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$823_storage_$",
                          "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                        }
                      },
                      "id": 927,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 926,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 920,
                        "src": "1403:4:3",
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
                      "src": "1397:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$823_storage",
                        "typeString": "struct LinniaUsers.User storage ref"
                      }
                    },
                    "id": 928,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "exists",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 818,
                    "src": "1397:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 924,
                  "id": 929,
                  "nodeType": "Return",
                  "src": "1390:25:3"
                }
              ]
            },
            "documentation": null,
            "id": 931,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 921,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 920,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 931,
                  "src": "1339:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 919,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1339:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1338:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 923,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 931,
                  "src": "1374:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 922,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1374:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1373:6:3"
            },
            "scope": 954,
            "src": "1323:99:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 952,
              "nodeType": "Block",
              "src": "1491:133:3",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 938,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 839,
                        "src": "1505:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$823_storage_$",
                          "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                        }
                      },
                      "id": 940,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 939,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 933,
                        "src": "1511:4:3",
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
                      "src": "1505:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$823_storage",
                        "typeString": "struct LinniaUsers.User storage ref"
                      }
                    },
                    "id": 941,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "exists",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 818,
                    "src": "1505:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 950,
                    "nodeType": "Block",
                    "src": "1585:33:3",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 948,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1606:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 937,
                        "id": 949,
                        "nodeType": "Return",
                        "src": "1599:8:3"
                      }
                    ]
                  },
                  "id": 951,
                  "nodeType": "IfStatement",
                  "src": "1501:117:3",
                  "trueBody": {
                    "id": 947,
                    "nodeType": "Block",
                    "src": "1525:54:3",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 942,
                              "name": "users",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 839,
                              "src": "1546:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$823_storage_$",
                                "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                              }
                            },
                            "id": 944,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 943,
                              "name": "user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 933,
                              "src": "1552:4:3",
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
                            "src": "1546:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_User_$823_storage",
                              "typeString": "struct LinniaUsers.User storage ref"
                            }
                          },
                          "id": 945,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "provenance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 822,
                          "src": "1546:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 937,
                        "id": 946,
                        "nodeType": "Return",
                        "src": "1539:29:3"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 953,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "provenanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 934,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 933,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 953,
                  "src": "1450:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 932,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1450:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1449:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 937,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 936,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 953,
                  "src": "1485:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 935,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1485:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1484:6:3"
            },
            "scope": 954,
            "src": "1428:196:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 955,
        "src": "127:1499:3"
      }
    ],
    "src": "0:1627:3"
  },
  "legacyAST": {
    "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaUsers.sol",
    "exportedSymbols": {
      "LinniaUsers": [
        954
      ]
    },
    "id": 955,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 812,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "absolutePath": "node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 813,
        "nodeType": "ImportDirective",
        "scope": 955,
        "sourceUnit": 1164,
        "src": "26:72:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaHub.sol",
        "file": "./LinniaHub.sol",
        "id": 814,
        "nodeType": "ImportDirective",
        "scope": 955,
        "sourceUnit": 122,
        "src": "99:25:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 815,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1163,
              "src": "151:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1163",
                "typeString": "contract Ownable"
              }
            },
            "id": 816,
            "nodeType": "InheritanceSpecifier",
            "src": "151:7:3"
          }
        ],
        "contractDependencies": [
          1163
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 954,
        "linearizedBaseContracts": [
          954,
          1163
        ],
        "name": "LinniaUsers",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "LinniaUsers.User",
            "id": 823,
            "members": [
              {
                "constant": false,
                "id": 818,
                "name": "exists",
                "nodeType": "VariableDeclaration",
                "scope": 823,
                "src": "187:11:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 817,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "187:4:3",
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
                "id": 820,
                "name": "registerBlocktime",
                "nodeType": "VariableDeclaration",
                "scope": 823,
                "src": "208:22:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 819,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "208:4:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 822,
                "name": "provenance",
                "nodeType": "VariableDeclaration",
                "scope": 823,
                "src": "240:15:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 821,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "240:4:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "User",
            "nodeType": "StructDefinition",
            "scope": 954,
            "src": "165:97:3",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 827,
            "name": "LogUserRegistered",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 826,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 825,
                  "indexed": true,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 827,
                  "src": "292:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 824,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "292:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "291:22:3"
            },
            "src": "268:46:3"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 833,
            "name": "LogProvenanceChanged",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 829,
                  "indexed": true,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 833,
                  "src": "346:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 828,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "346:7:3",
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
                  "id": 831,
                  "indexed": false,
                  "name": "provenance",
                  "nodeType": "VariableDeclaration",
                  "scope": 833,
                  "src": "368:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 830,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "368:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "345:39:3"
            },
            "src": "319:66:3"
          },
          {
            "constant": false,
            "id": 835,
            "name": "hub",
            "nodeType": "VariableDeclaration",
            "scope": 954,
            "src": "391:20:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaHub_$121",
              "typeString": "contract LinniaHub"
            },
            "typeName": {
              "contractScope": null,
              "id": 834,
              "name": "LinniaHub",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 121,
              "src": "391:9:3",
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
            "id": 839,
            "name": "users",
            "nodeType": "VariableDeclaration",
            "scope": 954,
            "src": "417:37:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$823_storage_$",
              "typeString": "mapping(address => struct LinniaUsers.User)"
            },
            "typeName": {
              "id": 838,
              "keyType": {
                "id": 836,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "425:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "417:24:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$823_storage_$",
                "typeString": "mapping(address => struct LinniaUsers.User)"
              },
              "valueType": {
                "contractScope": null,
                "id": 837,
                "name": "User",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 823,
                "src": "436:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_User_$823_storage_ptr",
                  "typeString": "struct LinniaUsers.User"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 848,
              "nodeType": "Block",
              "src": "496:27:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 846,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 844,
                      "name": "hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 835,
                      "src": "506:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$121",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 845,
                      "name": "_hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 841,
                      "src": "512:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$121",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "src": "506:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$121",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "id": 847,
                  "nodeType": "ExpressionStatement",
                  "src": "506:10:3"
                }
              ]
            },
            "documentation": null,
            "id": 849,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 841,
                  "name": "_hub",
                  "nodeType": "VariableDeclaration",
                  "scope": 849,
                  "src": "473:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaHub_$121",
                    "typeString": "contract LinniaHub"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 840,
                    "name": "LinniaHub",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 121,
                    "src": "473:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$121",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "472:16:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 843,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "496:0:3"
            },
            "scope": 954,
            "src": "461:62:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 852,
              "nodeType": "Block",
              "src": "576:3:3",
              "statements": []
            },
            "documentation": null,
            "id": 853,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 850,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "566:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 851,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "576:0:3"
            },
            "scope": 954,
            "src": "557:22:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 885,
              "nodeType": "Block",
              "src": "718:254:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 863,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "736:19:3",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 860,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1178,
                                "src": "744:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 861,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "744:10:3",
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
                            "id": 859,
                            "name": "isUser",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 931,
                            "src": "737:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view returns (bool)"
                            }
                          },
                          "id": 862,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "737:18:3",
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
                      "id": 858,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "728:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 864,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "728:28:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 865,
                  "nodeType": "ExpressionStatement",
                  "src": "728:28:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 866,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 839,
                        "src": "766:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$823_storage_$",
                          "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                        }
                      },
                      "id": 869,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 867,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1178,
                          "src": "772:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 868,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "772:10:3",
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
                      "src": "766:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$823_storage",
                        "typeString": "struct LinniaUsers.User storage ref"
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
                          "id": 871,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "813:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 872,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1168,
                            "src": "850:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 873,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "number",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "850:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 874,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "888:1:3",
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
                        "id": 870,
                        "name": "User",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 823,
                        "src": "786:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_User_$823_storage_ptr_$",
                          "typeString": "type(struct LinniaUsers.User storage pointer)"
                        }
                      },
                      "id": 875,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [
                        "exists",
                        "registerBlocktime",
                        "provenance"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "786:114:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$823_memory",
                        "typeString": "struct LinniaUsers.User memory"
                      }
                    },
                    "src": "766:134:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_User_$823_storage",
                      "typeString": "struct LinniaUsers.User storage ref"
                    }
                  },
                  "id": 877,
                  "nodeType": "ExpressionStatement",
                  "src": "766:134:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 879,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1178,
                          "src": "933:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 880,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "933:10:3",
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
                      "id": 878,
                      "name": "LogUserRegistered",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 827,
                      "src": "915:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 881,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "915:29:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 882,
                  "nodeType": "EmitStatement",
                  "src": "910:34:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 883,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "961:4:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 857,
                  "id": 884,
                  "nodeType": "Return",
                  "src": "954:11:3"
                }
              ]
            },
            "documentation": null,
            "id": 886,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "register",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 854,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "691:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 856,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 886,
                  "src": "712:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 855,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "712:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "711:6:3"
            },
            "scope": 954,
            "src": "674:298:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 917,
              "nodeType": "Block",
              "src": "1132:157:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 899,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 888,
                            "src": "1157:4:3",
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
                          "id": 898,
                          "name": "isUser",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 931,
                          "src": "1150:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 900,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1150:12:3",
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
                      "id": 897,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1181,
                        1182
                      ],
                      "referencedDeclaration": 1181,
                      "src": "1142:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 901,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1142:21:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 902,
                  "nodeType": "ExpressionStatement",
                  "src": "1142:21:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 903,
                          "name": "users",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 839,
                          "src": "1173:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$823_storage_$",
                            "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                          }
                        },
                        "id": 905,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 904,
                          "name": "user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 888,
                          "src": "1179:4:3",
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
                        "src": "1173:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_User_$823_storage",
                          "typeString": "struct LinniaUsers.User storage ref"
                        }
                      },
                      "id": 906,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "provenance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 822,
                      "src": "1173:22:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 907,
                      "name": "provenance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 890,
                      "src": "1198:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1173:35:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 909,
                  "nodeType": "ExpressionStatement",
                  "src": "1173:35:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 911,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 888,
                        "src": "1244:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 912,
                        "name": "provenance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 890,
                        "src": "1250:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 910,
                      "name": "LogProvenanceChanged",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 833,
                      "src": "1223:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 913,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1223:38:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 914,
                  "nodeType": "EmitStatement",
                  "src": "1218:43:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 915,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1278:4:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 896,
                  "id": 916,
                  "nodeType": "Return",
                  "src": "1271:11:3"
                }
              ]
            },
            "documentation": null,
            "id": 918,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 893,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 892,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1137,
                  "src": "1098:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1098:9:3"
              }
            ],
            "name": "setProvenance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 888,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 918,
                  "src": "1067:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 887,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1067:7:3",
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
                  "id": 890,
                  "name": "provenance",
                  "nodeType": "VariableDeclaration",
                  "scope": 918,
                  "src": "1081:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 889,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1081:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1066:31:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 896,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 895,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 918,
                  "src": "1126:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 894,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1126:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1125:6:3"
            },
            "scope": 954,
            "src": "1044:245:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 930,
              "nodeType": "Block",
              "src": "1380:42:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 925,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 839,
                        "src": "1397:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$823_storage_$",
                          "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                        }
                      },
                      "id": 927,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 926,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 920,
                        "src": "1403:4:3",
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
                      "src": "1397:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$823_storage",
                        "typeString": "struct LinniaUsers.User storage ref"
                      }
                    },
                    "id": 928,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "exists",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 818,
                    "src": "1397:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 924,
                  "id": 929,
                  "nodeType": "Return",
                  "src": "1390:25:3"
                }
              ]
            },
            "documentation": null,
            "id": 931,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 921,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 920,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 931,
                  "src": "1339:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 919,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1339:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1338:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 923,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 931,
                  "src": "1374:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 922,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1374:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1373:6:3"
            },
            "scope": 954,
            "src": "1323:99:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 952,
              "nodeType": "Block",
              "src": "1491:133:3",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 938,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 839,
                        "src": "1505:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$823_storage_$",
                          "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                        }
                      },
                      "id": 940,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 939,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 933,
                        "src": "1511:4:3",
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
                      "src": "1505:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$823_storage",
                        "typeString": "struct LinniaUsers.User storage ref"
                      }
                    },
                    "id": 941,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "exists",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 818,
                    "src": "1505:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 950,
                    "nodeType": "Block",
                    "src": "1585:33:3",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 948,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1606:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 937,
                        "id": 949,
                        "nodeType": "Return",
                        "src": "1599:8:3"
                      }
                    ]
                  },
                  "id": 951,
                  "nodeType": "IfStatement",
                  "src": "1501:117:3",
                  "trueBody": {
                    "id": 947,
                    "nodeType": "Block",
                    "src": "1525:54:3",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 942,
                              "name": "users",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 839,
                              "src": "1546:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$823_storage_$",
                                "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                              }
                            },
                            "id": 944,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 943,
                              "name": "user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 933,
                              "src": "1552:4:3",
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
                            "src": "1546:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_User_$823_storage",
                              "typeString": "struct LinniaUsers.User storage ref"
                            }
                          },
                          "id": 945,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "provenance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 822,
                          "src": "1546:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 937,
                        "id": 946,
                        "nodeType": "Return",
                        "src": "1539:29:3"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 953,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "provenanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 934,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 933,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 953,
                  "src": "1450:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 932,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1450:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1449:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 937,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 936,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 953,
                  "src": "1485:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 935,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1485:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1484:6:3"
            },
            "scope": 954,
            "src": "1428:196:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 955,
        "src": "127:1499:3"
      }
    ],
    "src": "0:1627:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0x1fc776cdad00196d211dd9593604b84f2a5067a0",
      "transactionHash": "0x4bd4286392495a4f297c2df303fabe6b0ea153035ca0293438f1c50afb5eb08d"
    }
  },
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-06-03T04:08:51.047Z"
}
