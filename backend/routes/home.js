const express = require("express");
const router = express.Router();

const {
  login,
  register,
  verify,
  forgotPassword,
  checkOtp,
  resetPassword,
  getUserInfo,
} = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/login", login);
router.post("/register", register);
router.post("/verify", verify);
router.post("/forgotPassword", forgotPassword);
router.post("/checkOtp", checkOtp);
router.post("/resetPassword", resetPassword);
router.get("/getuserinfo", authMiddleware, getUserInfo);

module.exports = router;
