let unsub = await web3AccountsSubscribe((accounts)=>{
  console.log(JSON.stringify(accounts, null, "  "))
})

// call unsub to stop subscription
// unsub()
