// this example shows how to retrieve the hex representation of a storage key

const ALICE = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";

// show the key for an entry without arguments
console.log(api.query.timestamp.now.key());

// show the key for a map entry (single argument)
console.log(api.query.system.account.key(ALICE));

// show the key prefix for a map
console.log(api.query.system.account.keyPrefix());

// show the key for a double map
console.log(api.query.staking.erasStakers.key(0, ALICE));

// show the key prefix for a doublemap
console.log(api.query.staking.erasStakers.keyPrefix());
