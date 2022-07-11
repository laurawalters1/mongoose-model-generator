const fs = require("fs");

let parsedData;
fs.readFile("../../package.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  parsedData = JSON.parse(data);
  console.log("test");
  parsedData.scripts["create:model"] =
    "cd node_modules && cd mongoose-model-templates && npm run create:model";
  fs.writeFile(
    "../../package.json",
    JSON.stringify(parsedData, null, 4),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
});
