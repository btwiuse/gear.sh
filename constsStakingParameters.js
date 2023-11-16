// Get SRML staking parameters as consts
// 'parameter_types' were added to substrate with spec_version: 101.
// This example will throw an error if used with versions before that.

const bondingDuration = api.consts.staking.bondingDuration;
const sessionsPerEra = api.consts.staking.sessionsPerEra;

console.log("Staking bonding duration: " + bondingDuration);
console.log("Staking sessions per era: " + sessionsPerEra);
