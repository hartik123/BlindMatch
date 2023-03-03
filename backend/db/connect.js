const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
const connectDB = mongoose.connection

connectDB.on('error', ()=>{
  console.log('Connection error')
})

connectDB.on('connected', ()=>{
  console.log('Connected to Database successfully')
})

module.exports = connectDB