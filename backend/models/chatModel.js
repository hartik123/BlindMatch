const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    members: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
      ],
    },
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "messages",
    },
    unreadMessages: {
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
