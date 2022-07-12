
const { Schema, model } = require("mongoose");

const moment = require("moment");

const test25Schema = new Schema(
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


const Test25 = model("Test25", test25Schema);

module.exports = Test25;
