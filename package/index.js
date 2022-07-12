const argv = require("minimist")(process.argv.slice(2));
const fs = require("fs");
const { parse } = require("path");
const { npm_config_name: name, npm_config_x: x } = process.env;

const data = `
const { Schema, model } = require("mongoose");

const moment = require("moment");

const ${name.toLowerCase()}Schema = new Schema(
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


const ${name} = model("${name}", ${name.toLowerCase()}Schema);

module.exports = ${name};
`;

if (!fs.existsSync("../../models")) {
	fs.mkdirSync("../../models");
}
// !
if (!fs.existsSync("../../models/index.js") && x) {
	fs.writeFileSync("../../models/index.js", ``);
}
// !
fs.writeFile(`../../models/${name}.js`, data, (err) => {
	if (err) {
		console.error(err);
	}
	// file written successfully
});

// !
if (x) {
	let testData;
	fs.readFile("../../models/index.js", "utf8", (err, data) => {
		testData = data;
		let models = data.slice(data.indexOf("{") + 1, data.indexOf("}"));
		let newModels = models.concat(`    ${name},`);
		// let newData = data.replace(/\{{1}\n(.|\n)+\n\}{1}/gm, `{${newModels}}`);
		let newData = data.replace(/\{(\d|\w|\s|,)+\}/gm, `{${newModels}\n}`);
		// let newData = data.replace("const", `${newModels}`);
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
// !
