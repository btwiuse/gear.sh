console.log("detected wallet:", isWeb3Injected);

let accounts = await web3Accounts();

console.log(JSON.stringify(accounts, null, "  "));
