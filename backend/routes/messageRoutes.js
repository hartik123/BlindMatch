const router = require("express").Router()
const authMiddleware = require("../middlewares/authMiddleware")
const {newMessage, getAllMessagesByChat} = require("../controllers/messageControllers")

router.post("/newMessage",authMiddleware,newMessage)
router.get("/getAllMessages/:chatId",authMiddleware,getAllMessagesByChat)

module.exports = router;