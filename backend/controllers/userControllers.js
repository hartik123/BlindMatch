const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async(req,res) => {
    try{
        // check if user already exists
        let user = await User.findOne({email : req.body.email})
        if(user){
         return res.send({
             success: false,
             data: null,
             message: "User already exists",
         })
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        req.body.password = hashedPassword;
        const newUser = new User(req.body)
        await newUser.save();
        res.send({
         message: "User created successfully",
         data: null,
         success: true,
        })
     }
     catch(error){
         res.send({
             message: error.message,
             data: error,
             success: false,
         })
     }
}

const login = async (req, res) => {
    try{
        //check if user exists
        let user = await User.findOne({email : req.body.email})
        if(!user){
          return res.send({
              message: "User does not exist",
              data: null,
              success: false,
          })
        }
        //check if password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword){
          return res.send({
              success: false,
              data: null,
              message: "Invalid password",
          })
        }
        
        // if(!user.isVerified){
        //   return res.send({
        //     success: false,
        //     message: "user is not verified yet or has been suspended",
        //   })
        // }
        //generate token
        const token = jwt.sign({_id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin}, process.env.JWT_SECRET, {expiresIn: "1d"});
        res.send({
          message: "User logged in successfully",
          success: true,
          data: token,
        }) 
      }
      catch(error){
        res.send({
          message: error.message,
          data: error,
          success: false,
        })
      }
}

const getUserInfo = async(req,res)=>{
    try{
      const user = await User.findById(req.body.userid);
      user.password = "";
      res.send({
        message: "user info fetched successfully",
        data: user,
        success: true,
      })
    }
    catch(error){
      res.send({
        message: error.message,
        data: error,
        success: false,
      })
    }
  }

module.exports = {
    register,
    login,
    getUserInfo
}