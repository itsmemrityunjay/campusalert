const mongoose = require("mongoose");

const tempNoticeSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    refno: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
    },
    department: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const noticeModel = mongoose.model("tempnotice", tempNoticeSchema);
// Exporting the model directly
module.exports = noticeModel;
