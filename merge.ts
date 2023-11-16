import * as YAML from "https://deno.land/x/std/yaml/mod.ts";

let index = YAML.parse(Deno.readTextFileSync("index.yaml"));

Deno.writeTextFileSync(
  "allSnippets.json",
  JSON.stringify(
    index.map((s) => {
      return {
        ...s,
        code: Deno.readTextFileSync(`${s.value}.js`),
      };
    }),
    null,
    "  ",
  ),
);
