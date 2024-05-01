const mongoose = require("mongoose");

const batchmodel = new mongoose.Schema(
  {
    batch: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const batchModel = mongoose.model("batchmodel", batchmodel);
// Exporting the model directly
module.exports = batchModel;
