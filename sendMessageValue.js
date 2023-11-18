let ALICE = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";
// let destination = util.u8aToHex(hashing.decodeAddress(ALICE));
let destination = util.u8aToHex(new Uint8Array(32));

let msg = {
  destination,
  gasLimit: 1000000000,
  payload: "0x",
  value: 12e12,
};

let tx = api.message.send(msg);

let { signer } = await web3FromAddress(ALICE);
api.setSigner(signer);

await tx.signAndSend(ALICE);
