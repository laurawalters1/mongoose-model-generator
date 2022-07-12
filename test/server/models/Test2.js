
const { Schema, model } = require("mongoose");

const moment = require("moment");

const test2Schema = new Schema(
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


const Test2 = model("Test2", test2Schema);

module.exports = Test2;
