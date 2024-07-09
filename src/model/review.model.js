const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var reviewSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("review", reviewSchema);
