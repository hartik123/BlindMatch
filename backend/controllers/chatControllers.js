const Chat = require("../models/chatModel")

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


module.exports = {createNewChat, getAllChatsByUser}