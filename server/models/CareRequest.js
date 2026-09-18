const mongoose = require("mongoose");

const careRequestSchema = new mongoose.Schema(
  {
    patient: {
      type: String,
      required: true,
    },

    service: {
      type: String,
      required: true,
    },

    nurse: {
      type: String,
      default: "Unassigned",
    },

    status: {
      type: String,
      enum: ["Pending", "Accepted", "Completed", "Cancelled"],
      default: "Pending",
    },

    date: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    startDate: {
      type: String,
      required: true,
    },

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("CareRequest", careRequestSchema);