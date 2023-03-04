const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    mobOtp: { type: Number, required: false },
    email: {type:String, required: true},
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    isVerified: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
