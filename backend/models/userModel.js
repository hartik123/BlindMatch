const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobOtp: { type: Number, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    phoneno: { type: Number, required: true },
    isVerified: { type: Boolean, default: false, required: true },
    image: {
      type: String,
      default: "",
      required: false,
    },
    gender: { type: String, required: false, default: "" },
    location: {type: String, required: false, default: "mumbai"},
    interest: {type: Object, required: false, default: {}}
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
