
const { Schema, model } = require("mongoose");

const moment = require("moment");

const test21Schema = new Schema(
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


const Test21 = model("Test21", test21Schema);

module.exports = Test21;
