// please switch the network to vara testnet since the program used in this example is deployed there

async function getMeta() {
  let metaResp = await fetch("https://idea.gear-tech.io/api", {
    "headers": {
      "accept": "application/json",
      "content-type": "application/json",
    },
    "body": JSON.stringify({
      "id": 40353209,
      "jsonrpc": "2.0",
      "method": "meta.get",
      "params": {
        "codeHash":
          "0x93bb19155902258f566c05b31112726390e90532a50a0c97f6dce922a9ab64ab",
        "genesis":
          "0x525639f713f397dcf839bd022cd821f367ebcf179de7b9253531f8adbe5436d6",
      },
    }),
    "method": "POST",
  });
  let metaJson = await metaResp.json();
  // console.log(JSON.stringify(metaJson))
  return ProgramMetadata.from(metaJson.result.hex);
}

let meta = await getMeta();

async function dumpProgramState(programId) {
  let payload = "0x";

  let result = await api.programState.read(
    { programId, payload },
    meta,
  );

  console.log(`${programId}:`, JSON.stringify(result.toHuman(), null, "  "));
}

// https://idea.gear-tech.io/programs/0x096e97bcb33c21c237c3514ab54158df74de6f97bbd667fed837360c5d3894d9?node=wss%3A%2F%2Ftestnet.vara-network.io
await dumpProgramState(
  "0x096e97bcb33c21c237c3514ab54158df74de6f97bbd667fed837360c5d3894d9",
);
