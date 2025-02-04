const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "review",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("customer", customerSchema);
