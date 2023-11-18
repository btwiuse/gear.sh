let ALICE = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";

let aliceDecoded = hashing.base58Decode(ALICE);
console.log(`base58 decoded:`, util.u8aToHex(aliceDecoded));

let [isValid, endPos, ss58Length, ss58Prefix] = hashing.checkAddressChecksum(
  aliceDecoded,
);
console.log(JSON.stringify({ isValid, endPos, ss58Length, ss58Prefix }));

let aliceHex = util.u8aToHex(hashing.decodeAddress(ALICE));
console.log("toHex:", aliceHex);

let networkPrefix = api.consts.system.ss58Prefix.toNumber();
let alice = hashing.encodeAddress(ALICE, networkPrefix);
console.log(`Equivalent address with prefix ${networkPrefix}:`, alice);
