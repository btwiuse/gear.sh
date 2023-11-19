console.log("detected wallet:", isWeb3Injected);

let wallets = await web3Enable("Gear Shell");

console.log(JSON.stringify(wallets, null, "  "));
