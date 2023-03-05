const Chat = require("../models/chatModel")
const Message = require("../models/messageModel")

// new message
const newMessage =  async (req, res) => {
    try {
      // store message
      const newMessage = new Message(req.body);
      const savedMessage = await newMessage.save();
  
      // update last message of chat
      await Chat.findOneAndUpdate(
        { _id: req.body.chat },
        {
          lastMessage: savedMessage._id,
          $inc: { unreadMessages: 1 },
        }
      );
  
      res.send({
        success: true,
        message: "Message sent successfully",
        data: savedMessage,
      });
    } catch (error) {
      res.send({
        success: false,
        message: "Error sending message",
        error: error.message,
      });
    }
  }
  
//   "/getAllMessages/:chatId",
  // get all messages of a chat
  
const getAllMessagesByChat = async (req, res) => {
    try {
      const messages = await Message.find({
        chat: req.params.chatId,
      }).sort({ createdAt: 1 });
      res.send({
        success: true,
        message: "Messages fetched successfully",
        data: messages,
      });
    } catch (error) {
      res.send({
        success: false,
        message: "Error fetching messages",
        error: error.message,
      });
    }
  }
  
module.exports = {newMessage, getAllMessagesByChat}