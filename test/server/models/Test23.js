
const { Schema, model } = require("mongoose");

const moment = require("moment");

const test23Schema = new Schema(
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


const Test23 = model("Test23", test23Schema);

module.exports = Test23;
