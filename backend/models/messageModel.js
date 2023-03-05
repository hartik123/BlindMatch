const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chats",
    },
    text: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.model("messages", messageSchema);

module.exports = messageModel;
