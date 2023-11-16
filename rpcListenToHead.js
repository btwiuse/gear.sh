// subscribe to new headers, printing the full info for 5 Blocks
let count = 0;
const unsub = await api.rpc.chain.subscribeNewHeads((header) => {
  console.log(`#${header.number}:`, header);

  if (++count === 5) {
    console.log("5 headers retrieved, unsubscribing");
    unsub();
  }
});
