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
  getAllUsers,
  updateProfile
} = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddleware");


router.post("/login", login);
router.post("/register", register);
router.post("/verify", verify);
router.post("/forgotPassword", forgotPassword);
router.post("/checkOtp", checkOtp);
router.post("/resetPassword", resetPassword);
router.get("/getuserinfo", authMiddleware, getUserInfo);
router.get('/getallusers', authMiddleware, getAllUsers);
router.post("/update-profile-picture", authMiddleware, updateProfile);

module.exports = router;
