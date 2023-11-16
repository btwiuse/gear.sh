import * as YAML from "https://deno.land/x/std/yaml/mod.ts";

let all = YAML.parse(Deno.readTextFileSync("allSnippets.yaml"));

all.forEach((s) => {
  Deno.writeTextFileSync(`${s.value}.js`, s.code);
});
