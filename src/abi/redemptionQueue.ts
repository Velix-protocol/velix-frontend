export const REDEMPTION_QUEUE_ABI = [
  {
    inputs: [],
    name: "AlreadyRedeemed",
    type: "error"
  },
  {
    inputs: [],
    name: "AlreadyReducedMaturity",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC721IncorrectOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ERC721InsufficientApproval",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC721InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "ERC721InvalidOperator",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC721InvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC721InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC721InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ERC721NonexistentToken",
    type: "error"
  },
  {
    inputs: [],
    name: "Erc721CallerNotOwnerOrApproved",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "collectAmount",
        type: "uint128"
      },
      {
        internalType: "uint128",
        name: "accruedAmount",
        type: "uint128"
      }
    ],
    name: "ExceedsCollectedFees",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "LpTokenNotLocked",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentTime",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "maturity",
        type: "uint64"
      }
    ],
    name: "NotMatureYet",
    type: "error"
  },
  {
    inputs: [],
    name: "ReduceTimeExceedsLimit",
    type: "error"
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "bits",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "SafeCastOverflowedUintDowncast",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256"
      }
    ],
    name: "StringsInsufficientHexLength",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nftId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint120",
        name: "veMetisOut",
        type: "uint120"
      },
      {
        indexed: false,
        internalType: "uint120",
        name: "cancelRedemptionFee",
        type: "uint120"
      }
    ],
    name: "CancelRedemptionTicketNft",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "collectAmount",
        type: "uint128"
      }
    ],
    name: "CollectRedemptionFees",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nftId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountVeMetisRedeemed",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint120",
        name: "redemptionFeeAmount",
        type: "uint120"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "maturityTimestamp",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cancelRedemptionFee",
        type: "uint256"
      }
    ],
    name: "EnterRedemptionQueue",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nftId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint120",
        name: "amountOut",
        type: "uint120"
      }
    ],
    name: "RedeemRedemptionTicketNft",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nftId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "lpLockToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpLockAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "reduceTime",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "newMaturityTimestamp",
        type: "uint64"
      }
    ],
    name: "ReduceRedemptionMaturity",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nftId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "lpToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpAmount",
        type: "uint256"
      }
    ],
    name: "UnlockLpToken",
    type: "event"
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "BACKEND_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "FEE_PRECISION",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "INITIAL_DEPOSIT_AMOUNT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "METIS",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "TIMELOCK_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256"
      }
    ],
    name: "cancelRedemptionTicketNft",
    outputs: [
      {
        internalType: "uint120",
        name: "_veMetisOut",
        type: "uint120"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "_collectAmount",
        type: "uint128"
      }
    ],
    name: "collectRedemptionFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "config",
    outputs: [
      {
        internalType: "contract IConfig",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address"
      },
      {
        internalType: "uint120",
        name: "_amountToRedeem",
        type: "uint120"
      }
    ],
    name: "enterRedemptionQueue",
    outputs: [
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lpToken",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "reduceTime",
        type: "uint64"
      },
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256"
      }
    ],
    name: "estimateLpAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "lpAmount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNftId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256"
      }
    ],
    name: "getNftInformation",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "hasBeenRedeemed",
            type: "bool"
          },
          {
            internalType: "uint64",
            name: "maturity",
            type: "uint64"
          },
          {
            internalType: "uint120",
            name: "amount",
            type: "uint120"
          },
          {
            internalType: "uint64",
            name: "cancelRedemptionFee",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "lpLockMaturity",
            type: "uint64"
          },
          {
            internalType: "address",
            name: "lpLockToken",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "lpLockAmount",
            type: "uint256"
          },
          {
            internalType: "bool",
            name: "lpClaimed",
            type: "bool"
          }
        ],
        internalType: "struct RedemptionQueue.RedemptionQueueItem",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lpToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lpAmount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256"
      }
    ],
    name: "getReduceTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_config",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "lpFactors",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256"
      }
    ],
    name: "nftInformation",
    outputs: [
      {
        internalType: "bool",
        name: "hasBeenRedeemed",
        type: "bool"
      },
      {
        internalType: "uint64",
        name: "maturity",
        type: "uint64"
      },
      {
        internalType: "uint120",
        name: "amount",
        type: "uint120"
      },
      {
        internalType: "uint64",
        name: "cancelRedemptionFee",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "lpLockMaturity",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "lpLockToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lpLockAmount",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "lpClaimed",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address"
      }
    ],
    name: "redeemRedemptionTicketNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "redemptionQueueAccounting",
    outputs: [
      {
        internalType: "uint128",
        name: "etherLiabilities",
        type: "uint128"
      },
      {
        internalType: "uint128",
        name: "unclaimedFees",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "lpToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lpAmount",
        type: "uint256"
      }
    ],
    name: "reduceRedemptionMaturity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lpToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "factor",
        type: "uint256"
      }
    ],
    name: "setLpFactor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256"
      }
    ],
    name: "unlockLpToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "veMetis",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
] as const;
