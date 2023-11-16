// You may leave this example running and make a transfer
// of any value from or to Alice address in the 'Transfer' App
const ALICE = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";

// Retrieve the initial data
let [, { free: previous }] = await api.query.system.account(ALICE);

console.log("ALICE has a balance of " + previous);

// Subscribe and listen to balance changes
api.query.system.account(ALICE, ([, { free }]) => {
  // Calculate the delta
  const change = free.sub(previous);
  // Only display positive value changes (Since we are pulling 'previous' above already,
  // the initial balance change will also be zero)
  if (!change.isZero()) {
    previous = free;
    console.log("New transaction of: " + change);
  }
});
