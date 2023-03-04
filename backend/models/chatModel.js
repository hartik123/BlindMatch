const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    members: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "users",
    },
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "messages",
    },
    unread: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const chatModel = mongoose.model("chats", chatSchema);

module.exports = chatModel;
