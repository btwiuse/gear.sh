// Returns all pending extrinsics, potentially grouped by sender
const unsub = await api.rpc.author.pendingExtrinsics((extrinsics) => {
  if (extrinsics.length === 0) {
    console.log("No pending extrinsics");
    return;
  }
  console.log(extrinsics);
});
