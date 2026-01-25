/**
 * This file is part of Telegram Bot API Docs (unofficial).
 * Author: Ankit Chaubey
 * GitHub: https://github.com/ankit-chaubey
 * Project: https://github.com/tgapis/botapidocs
 */

import fs from "fs";

/* =========================================================
   LOAD BOT API SCHEMA
========================================================= */
const api = JSON.parse(fs.readFileSync("botapi.json", "utf8"));

if (!api.methods || typeof api.methods !== "object") {
  throw new Error("Invalid botapi.json: methods missing");
}

/* =========================================================
   TYPE → EXAMPLE VALUE RESOLVER
========================================================= */
function exampleForTypes(types = []) {
  const t = Array.isArray(types) ? types.join(" ") : String(types);

  if (t.includes("Array")) return [];
  if (t.includes("Integer")) return 123456789;
  if (t.includes("Float")) return 0.1;
  if (t.includes("Boolean")) return false;
  if (t.includes("InputFile")) return "https://example.com/file.jpg";
  if (t.includes("String")) return "example";

  return {};
}

/* =========================================================
   METHODS
========================================================= */
const METHODS = Object.values(api.methods).map(method => {
  const description = Array.isArray(method.description)
    ? method.description.join("\n")
    : method.description || "";

  const returns = Array.isArray(method.returns)
    ? method.returns.join(", ")
    : method.returns || "";

  const params = (method.fields || []).map(f => ({
    name: f.name,
    typesLabel: Array.isArray(f.types)
      ? f.types.join(" | ")
      : String(f.types),
    required: Boolean(f.required),
    description: f.description || "",
    _types: f.types
  }));

  const jsonRequired = {};
  const jsonFull = {};

  params.forEach(p => {
    const value = exampleForTypes(p._types);
    if (p.required) jsonRequired[p.name] = value;
    jsonFull[p.name] = value;
  });

  const curl = `curl -X POST "https://api.telegram.org/bot<BOT_TOKEN>/${method.name}" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(jsonRequired, null, 2)}'`;

  return {
    name: method.name,
    href: method.href || "",
    description,
    returns,
    params: params.map(({ _types, ...rest }) => rest),
    jsonRequired,
    jsonFull,
    curl
  };
});

/* =========================================================
   WRITE OUTPUT (DOCS)
========================================================= */
fs.mkdirSync("docs", { recursive: true });

fs.writeFileSync(
  "docs/data.js",
  `// AUTO-GENERATED FILE — DO NOT EDIT

export const META = ${JSON.stringify(
    {
      version: api.version || "",
      release_date: api.release_date || "",
      changelog: api.changelog || ""
    },
    null,
    2
  )};

export const METHODS = ${JSON.stringify(METHODS, null, 2)};
`
);

/* =========================================================
   DONE
========================================================= */
console.log(
  "✅ Generated " + METHODS.length + " methods"
);
