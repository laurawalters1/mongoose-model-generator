const argv = require("minimist")(process.argv.slice(2));
const fs = require("fs");
const { npm_config_name: name } = process.env;

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

fs.writeFile(`./models/${name}.js`, data, (err) => {
	if (err) {
		console.error(err);
	}
	// file written successfully
});
