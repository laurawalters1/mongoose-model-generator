
const { Schema, model } = require("mongoose");

const moment = require("moment");

const test26Schema = new Schema(
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


const Test26 = model("Test26", test26Schema);

module.exports = Test26;
