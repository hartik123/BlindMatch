const express = require("express");
const app = express();
require("dotenv").config();
const db = require('./db/connect');
const cors = require('cors');

const homeRoute = require("./routes/home");
const chatRoute = require("./routes/chatRoutes")
const messageRoute = require("./routes/messageRoutes")

const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/users", homeRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages",messageRoute);

app.listen(port, ()=>{
  console.log(`Server running on Port ${port}`)
})

