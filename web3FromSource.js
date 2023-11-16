let ALICE = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";

let { signer } = await web3FromSource("polkadot-js");

let { signature } = await signer.signRaw({
  address: ALICE,
  data: "Gear Shell",
  type: "payload",
});

console.log(signature);
