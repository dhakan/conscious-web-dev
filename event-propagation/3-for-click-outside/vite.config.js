import fs from "fs";
import path from "path";

const examplesDir = "./examples";
const examples = fs.readdirSync(examplesDir).reduce((acc, dir) => {
  if (fs.statSync(path.join(examplesDir, dir)).isDirectory()) {
    acc[dir] = `${examplesDir}/${dir}/index.html`;
  }
  return acc;
}, {});

// Generate default index.html
const links = Object.keys(examples)
  .map((dir) => `<li><a href="/examples/${dir}/">${dir}</a></li>`)
  .join("\n");

const defaultHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Examples</title>
</head>
<body>
<h1>Examples</h1>
<ul>
${links}
</ul>
</body>
</html>`;

fs.writeFileSync("./index.html", defaultHtml);

export default {
  build: {
    rollupOptions: {
      input: {
        index: "./index.html",
        ...examples,
      },
    },
  },
};
