const Abi = [
  {
    name: "IVaulttImpl",
    type: "impl",
    interface_name: "starknet_vault::vault::IVault",
  },
  {
    name: "core::bool",
    type: "enum",
    variants: [
      {
        name: "False",
        type: "()",
      },
      {
        name: "True",
        type: "()",
      },
    ],
  },
  {
    name: "starknet_vault::vault::Deposit",
    type: "struct",
    members: [
      {
        name: "isActive",
        type: "core::bool",
      },
      {
        name: "amount",
        type: "core::integer::u64",
      },
      {
        name: "period",
        type: "core::integer::u32",
      },
      {
        name: "lockTime",
        type: "core::integer::u64",
      },
    ],
  },
  {
    name: "starknet_vault::vault::IVault",
    type: "interface",
    items: [
      {
        name: "lock",
        type: "function",
        inputs: [
          {
            name: "amount",
            type: "core::integer::u64",
          },
          {
            name: "period",
            type: "core::integer::u32",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "withdraw",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "getVaultBalance",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "starknet_vault::vault::Deposit",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "getBonustBalance",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u64",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    kind: "struct",
    name: "starknet_vault::vault::vault::Lock",
    type: "event",
    members: [
      {
        kind: "data",
        name: "amount",
        type: "core::integer::u64",
      },
      {
        kind: "data",
        name: "period",
        type: "core::integer::u32",
      },
    ],
  },
  {
    kind: "struct",
    name: "starknet_vault::vault::vault::Withdraw",
    type: "event",
    members: [
      {
        kind: "data",
        name: "amount",
        type: "core::integer::u64",
      },
    ],
  },
  {
    kind: "enum",
    name: "starknet_vault::vault::vault::Event",
    type: "event",
    variants: [
      {
        kind: "nested",
        name: "Lock",
        type: "starknet_vault::vault::vault::Lock",
      },
      {
        kind: "nested",
        name: "Withdraw",
        type: "starknet_vault::vault::vault::Withdraw",
      },
    ],
  },
];

export default Abi;
