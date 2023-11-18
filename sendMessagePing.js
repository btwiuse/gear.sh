let metaResp = await fetch(
  "https://github.com/gear-foundation/dapps/releases/download/nightly/ping.meta.txt",
);
let metaText = await metaResp.text();
let meta = ProgramMetadata.from(`0x${metaText}`);

// https://idea.gear-tech.io/programs/0x69d3c84a7c7c0764816680aeabf22108136ced1cd2d853a6a3a01be9889eadca?node=wss%3A%2F%2Ftestnet.vara-network.io
let programId =
  "0x69d3c84a7c7c0764816680aeabf22108136ced1cd2d853a6a3a01be9889eadca";
let payload = "PING";

let msg = {
  destination: programId,
  payload,
  gasLimit: 1000000000,
  value: 0,
};

let tx = api.message.send(msg, meta);

let ALICE = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";
let { signer } = await web3FromAddress(ALICE);
api.setSigner(signer);

let resp = await tx.signAndSend(ALICE);

console.log("successfully sent message:", payload);
