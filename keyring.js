console.log(JSON.stringify(keyring, null, "  "));
console.log(Object.keys(keyring));
console.log(
  JSON.stringify(
    keyring.getPairs().map((x) => [x.isLocked, x.address]),
    null,
    "  ",
  ),
);
