const fs = require("fs");
const { npm_config_name: name, npm_config_x: x } = process.env;

const data = `
const { Schema, model } = require("mongoose");

const moment = require("moment");

const ${name
  .split("")
  .reduce(
    (t, c, i) => (i === 0 ? t.concat(c.toLowerCase()) : t.concat(c)),
    ""
  )}Schema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


const ${name} = model("${name}", ${name
  .split("")
  .reduce(
    (t, c, i) => (i === 0 ? t.concat(c.toLowerCase()) : t.concat(c)),
    ""
  )}Schema);

module.exports = ${name};
`;

if (!fs.existsSync("../../models")) {
  fs.mkdirSync("../../models");
}

if (!fs.existsSync("../../models/index.js") && x) {
  fs.writeFileSync(
    "../../models/index.js",
    `const ${name} = require("./${name}");\n\nmodule.exports = {\n    ${name},\n};`
  );
} else if (x) {
  let testData;
  fs.readFile("../../models/index.js", "utf8", (err, data) => {
    testData = data;
    let models = data.slice(data.indexOf("{") + 1, data.indexOf("}"));
    let newModels = models.concat(`    ${name},`);

    let newData = data.replace(/\{(\d|\w|\s|,)+\}/gm, `{${newModels}\n}`);

    fs.writeFileSync(
      "../../models/index.js",
      `const ${name} = require("./${name}");\n${newData}`,
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
}

fs.writeFile(`../../models/${name}.js`, data, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`${name} model has successfully been created!`);
  // file written successfully
});
