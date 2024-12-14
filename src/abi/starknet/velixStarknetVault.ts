export const STARKET_TESTNET_VAULT_ABI = [
  {
    name: "Vault",
    type: "impl",
    interface_name: "velix_vault::vault::interface::IVault"
  },
  {
    name: "core::integer::u256",
    type: "struct",
    members: [
      {
        name: "low",
        type: "core::integer::u128"
      },
      {
        name: "high",
        type: "core::integer::u128"
      }
    ]
  },
  {
    name: "core::bool",
    type: "enum",
    variants: [
      {
        name: "False",
        type: "()"
      },
      {
        name: "True",
        type: "()"
      }
    ]
  },
  {
    name: "velix_vault::vault::interface::WithdrawRequest",
    type: "struct",
    members: [
      {
        name: "user",
        type: "core::starknet::contract_address::ContractAddress"
      },
      {
        name: "ve_strk_amount",
        type: "core::integer::u256"
      },
      {
        name: "expected_amount",
        type: "core::integer::u256"
      },
      {
        name: "start_time",
        type: "core::integer::u64"
      },
      {
        name: "maturity_period",
        type: "core::integer::u64"
      },
      {
        name: "is_completed",
        type: "core::bool"
      }
    ]
  },
  {
    name: "velix_vault::vault::interface::IVault",
    type: "interface",
    items: [
      {
        name: "get_tvl",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u256"
          }
        ],
        state_mutability: "view"
      },
      {
        name: "get_total_supply",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u256"
          }
        ],
        state_mutability: "view"
      },
      {
        name: "deposit_strk",
        type: "function",
        inputs: [
          {
            name: "assets",
            type: "core::integer::u256"
          },
          {
            name: "receiver",
            type: "core::starknet::contract_address::ContractAddress"
          }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        name: "set_ve_strk_token",
        type: "function",
        inputs: [
          {
            name: "ve_strk_token",
            type: "core::starknet::contract_address::ContractAddress"
          }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        name: "get_ve_strk_to_stake",
        type: "function",
        inputs: [
          {
            name: "amount",
            type: "core::integer::u256"
          }
        ],
        outputs: [
          {
            type: "core::integer::u256"
          }
        ],
        state_mutability: "view"
      },
      {
        name: "get_strk_to_unstake",
        type: "function",
        inputs: [
          {
            name: "ve_strk_amount",
            type: "core::integer::u256"
          }
        ],
        outputs: [
          {
            type: "core::integer::u256"
          }
        ],
        state_mutability: "view"
      },
      {
        name: "initiate_withdrawal",
        type: "function",
        inputs: [
          {
            name: "ve_strk_amount",
            type: "core::integer::u256"
          }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        name: "admin_enter_delegation_pool",
        type: "function",
        inputs: [
          {
            name: "strk_amount",
            type: "core::integer::u128"
          },
          {
            name: "staking_pool",
            type: "core::starknet::contract_address::ContractAddress"
          },
          {
            name: "staker_address",
            type: "core::starknet::contract_address::ContractAddress"
          }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        name: "admin_claim_rewards",
        type: "function",
        inputs: [],
        outputs: [],
        state_mutability: "external"
      },
      {
        name: "admin_initiate_exit",
        type: "function",
        inputs: [
          {
            name: "amount",
            type: "core::integer::u128"
          }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        name: "admin_complete_exit",
        type: "function",
        inputs: [
          {
            name: "pool_member",
            type: "core::starknet::contract_address::ContractAddress"
          }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        name: "complete_withdrawal",
        type: "function",
        inputs: [
          {
            name: "withdrawl_index",
            type: "core::integer::u256"
          }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        name: "get_request",
        type: "function",
        inputs: [
          {
            name: "withdrawl_index",
            type: "core::integer::u256"
          }
        ],
        outputs: [
          {
            type: "velix_vault::vault::interface::WithdrawRequest"
          }
        ],
        state_mutability: "view"
      },
      {
        name: "get_pool_balance",
        type: "function",
        inputs: [
          {
            name: "staking_pool",
            type: "core::starknet::contract_address::ContractAddress"
          },
          {
            name: "staker_address",
            type: "core::starknet::contract_address::ContractAddress"
          }
        ],
        outputs: [
          {
            type: "core::integer::u256"
          }
        ],
        state_mutability: "view"
      }
    ]
  },
  {
    name: "constructor",
    type: "constructor",
    inputs: [
      {
        name: "pool",
        type: "core::starknet::contract_address::ContractAddress"
      },
      {
        name: "asset",
        type: "core::starknet::contract_address::ContractAddress"
      },
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress"
      },
      {
        name: "vault_withdrawal_manager",
        type: "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    kind: "struct",
    name: "velix_vault::vault::velix_vault_manager::velix_vault_manager::DepositedStrk",
    type: "event",
    members: [
      {
        kind: "key",
        name: "receiver",
        type: "core::starknet::contract_address::ContractAddress"
      },
      {
        kind: "data",
        name: "assets",
        type: "core::integer::u256"
      },
      {
        kind: "data",
        name: "is_deposited",
        type: "core::bool"
      }
    ]
  },
  {
    kind: "struct",
    name: "velix_vault::vault::velix_vault_manager::velix_vault_manager::WithdrawlIntitatedFor",
    type: "event",
    members: [
      {
        kind: "key",
        name: "user",
        type: "core::starknet::contract_address::ContractAddress"
      },
      {
        kind: "data",
        name: "ve_strk_amount",
        type: "core::integer::u256"
      },
      {
        kind: "data",
        name: "strk_amount",
        type: "core::integer::u256"
      }
    ]
  },
  {
    kind: "struct",
    name: "velix_vault::vault::velix_vault_manager::velix_vault_manager::IntitatedWithdrawl",
    type: "event",
    members: [
      {
        kind: "key",
        name: "user",
        type: "core::starknet::contract_address::ContractAddress"
      },
      {
        kind: "key",
        name: "request_index",
        type: "core::integer::u256"
      },
      {
        kind: "data",
        name: "ve_strk_amount",
        type: "core::integer::u256"
      },
      {
        kind: "data",
        name: "expected_amount",
        type: "core::integer::u256"
      }
    ]
  },
  {
    kind: "struct",
    name: "velix_vault::vault::velix_vault_manager::velix_vault_manager::WithdrawRequestCompleted",
    type: "event",
    members: [
      {
        kind: "data",
        name: "request",
        type: "velix_vault::vault::interface::WithdrawRequest"
      }
    ]
  },
  {
    kind: "struct",
    name: "velix_vault::vault::velix_vault_manager::velix_vault_manager::AdminEnteredPool",
    type: "event",
    members: [
      {
        kind: "data",
        name: "this",
        type: "core::starknet::contract_address::ContractAddress"
      },
      {
        kind: "data",
        name: "strk_amount",
        type: "core::integer::u128"
      }
    ]
  },
  {
    kind: "struct",
    name: "velix_vault::vault::velix_vault_manager::velix_vault_manager::AdminClaimedRewards",
    type: "event",
    members: [
      {
        kind: "data",
        name: "rewards",
        type: "core::integer::u128"
      }
    ]
  },
  {
    kind: "struct",
    name: "velix_vault::vault::velix_vault_manager::velix_vault_manager::AdmintCompletedExit",
    type: "event",
    members: [
      {
        kind: "data",
        name: "executor",
        type: "core::starknet::contract_address::ContractAddress"
      },
      {
        kind: "data",
        name: "execute_at",
        type: "core::integer::u64"
      }
    ]
  },
  {
    kind: "struct",
    name: "velix_vault::vault::velix_vault_manager::velix_vault_manager::AdmintInitializedExit",
    type: "event",
    members: [
      {
        kind: "data",
        name: "amount",
        type: "core::integer::u128"
      },
      {
        kind: "data",
        name: "time",
        type: "core::integer::u64"
      }
    ]
  },
  {
    kind: "enum",
    name: "velix_vault::vault::velix_vault_manager::velix_vault_manager::Event",
    type: "event",
    variants: [
      {
        kind: "nested",
        name: "DepositedStrk",
        type: "velix_vault::vault::velix_vault_manager::velix_vault_manager::DepositedStrk"
      },
      {
        kind: "nested",
        name: "WithdrawlIntitatedFor",
        type: "velix_vault::vault::velix_vault_manager::velix_vault_manager::WithdrawlIntitatedFor"
      },
      {
        kind: "nested",
        name: "IntitatedWithdrawl",
        type: "velix_vault::vault::velix_vault_manager::velix_vault_manager::IntitatedWithdrawl"
      },
      {
        kind: "nested",
        name: "WithdrawRequestCompleted",
        type: "velix_vault::vault::velix_vault_manager::velix_vault_manager::WithdrawRequestCompleted"
      },
      {
        kind: "nested",
        name: "AdminEnteredPool",
        type: "velix_vault::vault::velix_vault_manager::velix_vault_manager::AdminEnteredPool"
      },
      {
        kind: "nested",
        name: "AdminClaimedRewards",
        type: "velix_vault::vault::velix_vault_manager::velix_vault_manager::AdminClaimedRewards"
      },
      {
        kind: "nested",
        name: "AdmintCompletedExit",
        type: "velix_vault::vault::velix_vault_manager::velix_vault_manager::AdmintCompletedExit"
      },
      {
        kind: "nested",
        name: "AdmintInitializedExit",
        type: "velix_vault::vault::velix_vault_manager::velix_vault_manager::AdmintInitializedExit"
      }
    ]
  }
] as const;
