"use strict";

const { default: mongoose } = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    data: {
      type: String,
      default: ""
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("test", testSchema);
    