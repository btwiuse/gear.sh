// Retrieve the chain & node information information via rpc calls
const [chain, nodeName, nodeVersion, properties] = await Promise.all([
  api.rpc.system.chain(),
  api.rpc.system.name(),
  api.rpc.system.version(),
  api.rpc.system.properties(),
]);
console.log("You are connected to chain " + chain);
console.log("You are using: " + nodeName + " v" + nodeVersion);

if (properties.size > 0) {
  console.log("Node specific properties:");
  properties.forEach((value, key) => {
    console.log(key, value);
  });
} else {
  console.log("No specific chain properties found.");
}
