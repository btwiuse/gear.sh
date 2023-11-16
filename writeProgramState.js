let metaResp = await fetch(
  "https://no-cors.deno.dev/https://github.com/btwiuse/gurls/releases/download/v0.0.1/gurls.meta.txt",
);
let metaText = await metaResp.text();
let meta = ProgramMetadata.from(`0x${metaText}`);

// https://idea.gear-tech.io/programs/0x54045e2dc35baf015f325b80b23a6d7d0942eaa9b2ecb87e56f934f7c3a71f5f?node=wss%3A%2F%2Ftestnet.vara-network.io
let programId =
  "0x54045e2dc35baf015f325b80b23a6d7d0942eaa9b2ecb87e56f934f7c3a71f5f";
let payload = {
  AddUrl: {
    Code: "gogl",
    Url: "https://google.com",
  },
};

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

await tx.signAndSend(ALICE);
