let registryResp = await fetch(
  "https://github.com/paritytech/ss58-registry/raw/main/ss58-registry.json",
);
let registry = await registryResp.json();
console.log(JSON.stringify(registry, null, "  "));
