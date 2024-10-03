export const STARKET_TESTNET_VAULT_ABI = [
  {
    name: "SimpleVault",
    type: "impl",
    interface_name: "vault::vault::ISimpleVault"
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
    name: "vault::vault::ISimpleVault",
    type: "interface",
    items: [
      {
        name: "deposit",
        type: "function",
        inputs: [
          {
            name: "amount",
            type: "core::integer::u256"
          }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        name: "withdraw",
        type: "function",
        inputs: [
          {
            name: "shares",
            type: "core::integer::u256"
          }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        name: "user_balance_of",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress"
          }
        ],
        outputs: [
          {
            type: "core::integer::u256"
          }
        ],
        state_mutability: "external"
      },
      {
        name: "contract_total_supply",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u256"
          }
        ],
        state_mutability: "external"
      }
    ]
  },
  {
    name: "constructor",
    type: "constructor",
    inputs: [
      {
        name: "token",
        type: "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    kind: "enum",
    name: "vault::vault::SimpleVault::Event",
    type: "event",
    variants: []
  }
] as const;
