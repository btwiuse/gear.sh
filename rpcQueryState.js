// retrieve and log the complete metadata of your node
const metadata = await api.rpc.state.getMetadata();

console.log("version: " + metadata.version);
console.log(
  "formatted: " + JSON.stringify(metadata.asLatest.toHuman(), null, 2),
);
