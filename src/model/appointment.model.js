const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var appointmentSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    deviceType: {
      type: String,
      enum: ["Phone", "Laptop", "Other"],
      required: true,
      default: "Phone",
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    technician: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "technician",
      required: true,
    },
    time: {
      type: Date,
      required: true,
    },
    estimatedReadyBy: {
      type: Date,
    },

    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["scheduled", "completed", "canceled"],
      default: "scheduled",
    },
    location: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("appointment", appointmentSchema);
