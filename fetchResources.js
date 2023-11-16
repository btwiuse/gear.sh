let metaResp = await fetch(
  "https://no-cors.deno.dev/https://github.com/btwiuse/gurls/releases/download/v0.0.1/gurls.meta.txt",
);

let metaText = await metaResp.text();

console.log(`0x${metaText}`);

let wasmResp = await fetch(
  "https://no-cors.deno.dev/https://github.com/btwiuse/gurls/releases/download/v0.0.1/gurls.opt.wasm",
);

let wasmBuff = await wasmResp.arrayBuffer();

console.log(util.u8aToHex(new Uint8Array(wasmBuff)));
