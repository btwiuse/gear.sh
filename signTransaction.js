let ALICE = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";
let { signer } = await web3FromAddress(ALICE);

api.setSigner(signer);

let tx = api.tx.system.remarkWithEvent("Hello");

await tx.signAndSend(ALICE);
