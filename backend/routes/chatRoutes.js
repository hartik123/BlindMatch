const router = require("express").Router()
const authMiddleware = require("../middlewares/authMiddleware")
const {createNewChat, getAllChatsByUser, clearUnreadMessages} = require("../controllers/chatControllers")

router.post("/createNewChat",authMiddleware,createNewChat)
router.get("/getAllChatsByUser",authMiddleware,getAllChatsByUser)
router.post("/clearUnreadMessages",authMiddleware,clearUnreadMessages)

module.exports = router;