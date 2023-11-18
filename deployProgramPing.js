let metaResp = await fetch(
  "https://github.com/gear-foundation/dapps/releases/download/nightly/ping.meta.txt",
);
let metaText = await metaResp.text();
let meta = ProgramMetadata.from(`0x${metaText}`);

let wasmResp = await fetch(
  "https://github.com/gear-foundation/dapps/releases/download/nightly/ping.opt.wasm",
);
let wasmBuff = await wasmResp.arrayBuffer();

let program = {
  code: new Uint8Array(wasmBuff),
  gasLimit: 1000000000,
  value: 0,
  initPayload: "0x",
};

let { programId, codeId, salt, extrinsic } = await api.program.upload(
  program,
  meta,
);
let codeExists = await api.code.exists(codeId);

console.log("codeExists", codeExists);
console.log("codeId:", codeId);
console.log("salt:", salt);
console.log("programId:", programId);

let ALICE = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";
let { signer } = await web3FromAddress(ALICE);
api.setSigner(signer);

await extrinsic.signAndSend(ALICE);
