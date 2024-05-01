const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    admno: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      enum: ["Admin", "Student"],
    },
  },
  {
    timestamps: true,
  }
);

exports.UserModel = mongoose.model("User", userSchema);
