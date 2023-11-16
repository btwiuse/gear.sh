let metaResp = await fetch(
  "https://no-cors.deno.dev/https://github.com/btwiuse/gurls/releases/download/v0.0.1/gurls.meta.txt",
);

let metaText = await metaResp.text();

let meta = ProgramMetadata.from(`0x${metaText}`);

console.log(JSON.stringify(meta, null, "  "));
