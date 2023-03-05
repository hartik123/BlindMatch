const router = require("express").Router()
const authMiddleware = require("../middlewares/authMiddleware")
const {createNewChat, getAllChatsByUser} = require("../controllers/chatControllers")

router.post("/createNewChat",authMiddleware,createNewChat)
router.get("/getAllChatsByUser",authMiddleware,getAllChatsByUser)

module.exports = router;