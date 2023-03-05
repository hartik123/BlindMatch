const User = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const { sendMobileOtp } = require("../utils/mobileOtp");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel.js");

const register = async (req, res) => {
  try {
    // check if user already exists
    let user = await User.findOne({
      email: req.body.email,
      phoneno: req.body.phoneno,
    });
    if (user) {
      return res.send({
        success: false,
        data: null,
        message: "User already exists",
      });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const newUser = new User(req.body);
    await newUser.save();
    var otp = Math.floor(1000 + Math.random() * 9000);
    var response = await sendMobileOtp({ phoneno: newUser.phoneno, otp: otp });
    newUser.mobOtp = response.config.params.variables_values;
    await newUser.save();

    res.send({
      message: "User created successfully",
      data: newUser._id,
      success: true,
    });
  } catch (error) {
    res.send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    //check if user exists
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.send({
        message: "User does not exist",
        data: null,
        success: false,
      });
    }
    if (!user.isVerified) {
      return res.send({
        message: "User not verified, You cannot login",
        data: null,
        success: false,
      });
    }
    //check if password is correct
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.send({
        success: false,
        data: null,
        message: "Invalid password",
      });
    }

    // if(!user.isVerified){
    //   return res.send({
    //     success: false,
    //     message: "user is not verified yet or has been suspended",
    //   })
    // }
    //generate token
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.send({
      message: "User logged in successfully",
      success: true,
      data: token,
    });
  } catch (error) {
    res.send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

const verify = async (req, res) => {
  try {
    //check if user exists
    console.log(req.body);
    let user = await User.findOne({ _id: req.body.newUserId });
    if (!user) {
      return res.send({
        message: "User does not exist",
        data: null,
        success: false,
      });
    } else {
      if (user.mobOtp === req.body.otp) {
        user.isVerified = true;
        await user.save();
        res.send({
          message: "User verified successfully",
          success: true,
          data: null,
        });
      } else {
        res.send({
          message: "Otp doesn't match",
          success: false,
          data: null,
        });
      }
    }
  } catch (error) {
    res.send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

const forgotPassword = async (req, res) => {
  try {
    let phoneno = req.body.phoneno;
    let user = await User.findOne({
      phoneno: phoneno,
    });
    if (user) {
      var otp = Math.floor(1000 + Math.random() * 9000);
      var response = await sendMobileOtp({ phoneno: phoneno, otp: otp });
      user.mobOtp = response.config.params.variables_values;
      user.save();
      return res.send({
        success: true,
        data: phoneno,
        message: "OTP sent!",
      });
    } else {
      return res.send({
        success: false,
        data: null,
        message: "Mobile No. not found!!",
      });
    }
  } catch (error) {
    res.send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

const checkOtp = async (req, res) => {
  try {
    let { phoneno, otp } = req.body;
    console.log(phoneno, otp);
    let user = await User.findOne({
      phoneno: phoneno,
    });
    if (user.mobOtp == otp) {
      return res.send({
        success: true,
        data: null,
        message: "OTP verified successfully!",
      });
    } else {
      return res.send({
        success: false,
        data: null,
        message: "Invalid OTP!",
      });
    }
  } catch (error) {
    res.send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    let { phoneno, newPass1 } = req.body;
    let user = await User.findOne({
      phoneno: phoneno,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPass1, salt);
    await user.save();
    res.send({
      message: "Password changed successfully",
      success: true,
      data: null,
    });
  } catch (error) {
    res.send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

const getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.body.userid);
    user.password = "";
    res.send({
      message: "user info fetched successfully",
      data: user,
      success: true,
    });
  } catch (error) {
    res.send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

const getAllUsers = async(req, res)=>{
  try {
    const allUsers = await User.find({_id: {
      $ne: req.body.userid
    }})

    if(allUsers){
      res.send({
        message: "Users fetched successfully",
        success: true,
        data: allUsers
      })
    }
    else{
      res.send({
        message: "No Users to display",
        success: false,
        data: null
      })
    }


  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: error
    })
  }
}

const updateProfile = async (req, res)=>{
      try {
        // const uploadResponse = await cloudinary.v2.uploader.upload(req.body.image, {
        //   folder: "sheychat_udemy",
        //   use_filename: true,
        // });
    
        // req.body.image = uploadResponse.url;
        console.log(req.body)
        const {gender, location, interest} = req.body
        // await User.findByIdAndUpdate(req.body.userid, {
        //   gender: gender,
        //   location: location
        // });

        const user = await User.findOne({_id: req.body.userid})
        user.gender = gender
        user.location = location
        user.interest = interest
        await user.save()

        res.send({
          message: "Profile updated successfully",
          success: true,
          data: "",
        });
      } catch (error) {
        res.status(500).send({
          message: error.message,
          data: error,
          success: false,
        });
      }
}

module.exports = {
  register,
  login,
  verify,
  forgotPassword,
  checkOtp,
  resetPassword,
  getUserInfo,
  getAllUsers,
  updateProfile
};
