// This example set shows how to make queries at a point
const ALICE = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";

// retrieve the balance, once-off at the latest block
const { data: { free } } = await api.query.system.account(ALICE);

console.log("Alice has a current balance of", free.toHuman());

// retrieve balance updates with an optional value callback
const balanceUnsub = await api.query.system.account(
  ALICE,
  ({ data: { free } }) => {
    console.log("Alice has an updated balance of", free.toHuman());
  },
);

// retrieve the balance at a block hash in the past
const header = await api.rpc.chain.getHeader();
const prevHash = await api.rpc.chain.getBlockHash(
  header.number.unwrap().subn(42),
);
const { data: { free: prev } } = await api.query.system.account.at(
  prevHash,
  ALICE,
);

console.log("Alice had a balance of", prev.toHuman(), "(42 blocks ago)");

// useful in some situations - the value hash and storage entry size
const currHash = await api.query.system.account.hash(ALICE);
const currSize = await api.query.system.account.size(ALICE);

console.log(
  "Alice account entry has a value hash of",
  currHash,
  "with a size of",
  currSize,
);
