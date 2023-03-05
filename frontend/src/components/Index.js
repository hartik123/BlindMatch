import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ChatArea from "./ChatArea";
import UserSearch from "./UserSearch";
import UsersList from "./UsersList";
import startChat from "../assets/images/startChat.png";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");
const Index = () => {
  const [searchKey, setSearchKey] = useState("");
  const { selectedChat, user } = useSelector((state) => state.users);
  const [onlineUsers, setOnlineUsers] = useState([]);
  useEffect(() => {
    // join the room
    if (user) {
      socket.emit("join-room", user._id);
      socket.emit("came-online", user._id);

      socket.on("online-users-updated", (users) => {
        setOnlineUsers(users);
      });
    }
  }, [user]);

  return (
    <div className="flex gap-5">
      <div className="w-96">
        <UserSearch searchKey={searchKey} setSearchKey={setSearchKey} />
        <UsersList
          searchKey={searchKey}
          socket={socket}
          onlineUsers={onlineUsers}
        />
      </div>
      {selectedChat && (
        <div className="w-full">
          <ChatArea socket={socket} />
        </div>
      )}
      {!selectedChat && (
        <div className="w-full h-[80vh]  items-center justify-center flex bg-white flex-col">
          <img
            src={startChat}
            alt="ChatImg"
            style={{ width: "75%", height: "70%" }}
          />
          <div className="btn btn-outline-dark w-50 p-2 mt-3" onClick={"start session"}>
            Start Matching...
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
