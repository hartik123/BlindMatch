const express = require("express");
const router = express.Router();
const { checkCred } = require("../utils/checkCred");
const { sendEmailOtp } = require("../utils/emailOtp");
const { sendMobileOtp } = require("../utils/mobileOtp");

router.get("/", (req, res) => {
  res.send('<a href="/login">Login</a><br><a href="/register">Register</a>');
});

router.get("/login", (req, res) => {
  res.send("fetch login page");
});

router.post("/login/:credential", async (req, res) => {
  let cred = req.params.credential;
  let credType = checkCred(cred);
  var otp = Math.floor(1000 + Math.random() * 9000);

  if (credType === "mobile") {
    var response = await sendMobileOtp({ mobile: cred, otp: otp });
    console.log(response.data);
    if (response.data.return) res.json({ status: true, id: Date.now() });
  } else if (credType === "email") {
    await sendEmailOtp({
      email: cred,
      subj: "Email Authentication",
      msg: "Your OTP for Email Authentication is " + otp,
    });
    res.json({ status: true, id: Date.now() });
  } else {
    res.json({ status: false });
  }
});

router.get("/register", (req, res) => {
  res.send("fetch register page");
});

router.post("/register", (req, res) => {
  res.send("register");
});

module.exports = router;
