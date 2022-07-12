
const { Schema, model } = require("mongoose");

const moment = require("moment");

const test22Schema = new Schema(
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


const Test22 = model("Test22", test22Schema);

module.exports = Test22;
