const express = require("express");
const app = express();
require("dotenv").config();
const db = require('./db/connect');
const cors1 = require('cors');

const homeRoute = require("./routes/home");
const chatRoute = require("./routes/chatRoutes")
const messageRoute = require("./routes/messageRoutes")

const port = process.env.PORT || 3000;

app.use(cors1())
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const server = require("http").createServer(app)
const io = require("socket.io")(server, {
  cors : {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let onlineUsers = [];
io.on('connection', (socket) => {
  // socket operations
  socket.on("join-room", (userid) => {
    socket.join(userid);
  });
  // send message to clients (who are present in members array)
  socket.on("send-message", (message1) => {
    console.log(message1)
    io.to(message1.members[0])
      .to(message1.members[1])
      .emit("receive-message", message1);
  });
  // clear unread messages
  socket.on("clear-unread-messages", (data) => {
    io.to(data.members[0])
      .to(data.members[1])
      .emit("unread-messages-cleared", data);
  });

  // typing event
  socket.on("typing", (data) => {
    console.log(data)
    socket.broadcast.emit("started-typing", "hello")
    // io.to(data.members[0]).to(data.members[1]).emit("started-typing", "hello");
    // io.to(data.members[0]).to(data.members[1]).emit("started-typing", data);
  });

  // online users

  socket.on("came-online", (userid) => {
    if (!onlineUsers.includes(userid)) {
      onlineUsers.push(userid);
    }

    io.emit("online-users-updated", onlineUsers);
  });

  socket.on("went-offline", (userid) => {
    onlineUsers = onlineUsers.filter((user) => user !== userid);
    io.emit("online-users-updated", onlineUsers);
  });
})



app.use("/api/users", homeRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages",messageRoute);

server.listen(port, ()=>{
  console.log(`Server running on Port ${port}`)
})

