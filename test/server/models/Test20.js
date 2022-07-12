
const { Schema, model } = require("mongoose");

const moment = require("moment");

const test20Schema = new Schema(
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


const Test20 = model("Test20", test20Schema);

module.exports = Test20;
