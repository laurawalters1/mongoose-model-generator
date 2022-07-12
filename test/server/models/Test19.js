
const { Schema, model } = require("mongoose");

const moment = require("moment");

const test19Schema = new Schema(
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


const Test19 = model("Test19", test19Schema);

module.exports = Test19;
