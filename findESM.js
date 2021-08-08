const fs = require("fs");
const path = require("path");

const list = [];

fs.readdirSync("node_modules", { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .forEach((d) => {
    try {
      const info = JSON.parse(
        fs.readFileSync(
          path.join("node_modules", d.name, "package.json"),
          "utf-8"
        )
      );
      if (info.type === "module") {
        list.push(d.name);
      }
    } catch {}
  });

console.log(list);
