import { useEffect } from "react";
import { socket } from "../consts/utils";
import "./ChatApp.css";
import Navbar from "./../shared/navbar/Navbar";
import ChatRoom from "../shared/chatRoom/ChatRoom";

const ChatApp = () => {
  useEffect(() => {
    socket.on("typing", (userName, err) => {
      if (err) throw err;
      console.log(userName, "is typing");
    });

    socket.on("new-message", (data, err) => {
      if (err) throw err;
    });
  }, []);

  return (
    <div className="chat-app">
      <Navbar />
      <ChatRoom />
    </div>
  );
};
export default ChatApp;
