const express = require("express");
const router = express.Router();
// const { checkCred } = require("../utils/checkCred");
// const { sendEmailOtp } = require("../utils/emailOtp");
// const { sendMobileOtp } = require("../utils/mobileOtp");
const {login, register, getUserInfo} = require('../controllers/userControllers');
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/login", login);
router.post("/register", register);

router.get('/getuserinfo', authMiddleware, getUserInfo);


module.exports = router;
