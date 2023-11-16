// You may leave this example running and make a transfer
// of any value from or to Alice/Bob address in the 'Transfer' App
const ALICE = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";
const BOB = "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty";

console.log("Tracking balances for:", [ALICE, BOB]);

// Subscribe and listen to several balance changes
api.query.system.account.multi([ALICE, BOB], (info) => {
  console.log("Change detected, new balances: ", info);
});
