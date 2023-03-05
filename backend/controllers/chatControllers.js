const Chat = require("../models/chatModel")
const Message = require("../models/messageModel")

//create a new chat
const createNewChat = async(req,res) => {
    try{
     const newChat = new Chat(req.body)
     const savedChat = await newChat.save()
     await savedChat.populate("members");
     res.send({
        success: true,
        message: "Chat created successfully",
        data: savedChat
     }) 
     
    }
    catch(error){
    res.send({
        success: false,
        message: error.message,
        data: error
    })
  }
} 

//get All chats of a current user
const getAllChatsByUser = async(req,res) => {
    try{
        const chats = await Chat.find({
            members: {
               $in: [req.body.userid],
            }
        }).populate("members").populate("lastMessage").sort({updatedAt: -1})
        res.send({
           success: true,
           message: "Chat created successfully",
           data: chats
        }) 
    }
    catch(error){
        res.send({
            success: false,
            message: error.message,
            data: error
        })
    }
}


const clearUnreadMessages = async (req, res) => {
    try {
      // find chat and update unread messages count to 0
      const chat = await Chat.findById(req.body.chat);
      if (!chat) {
        return res.send({
          success: false,
          message: "Chat not found",
        });
      }
      const updatedChat = await Chat.findByIdAndUpdate(
        req.body.chat,
        {
          unreadMessages: 0,
        },
        { new: true }
      )
        .populate("members")
        .populate("lastMessage");
  
      // find all unread messages of this chat and update them to read
      await Message.updateMany(
        {
          chat: req.body.chat,
          read: false,
        },
        {
          read: true,
        }
      );
      res.send({
        success: true,
        message: "Unread messages cleared successfully",
        data: updatedChat,
      });
    } catch (error) {
      res.send({
        success: false,
        message: "Error clearing unread messages",
        error: error.message,
      });
    }
  }


module.exports = {createNewChat, getAllChatsByUser, clearUnreadMessages}