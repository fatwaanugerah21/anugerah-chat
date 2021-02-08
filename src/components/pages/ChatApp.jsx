import { useEffect, useState } from "react";
import { socket } from "../consts/utils";
import "./ChatApp.css";
import Navbar from "./../shared/navbar/Navbar";
import ChatRoom from "../shared/chatRoom/ChatRoom";

const ChatApp = () => {
  // eslint-disable-next-line no-unused-vars
  const [thisUserId] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [messages, setMessages] = useState([
    {
      senderID: 0,
      message: "Jangan nakal",
    },
    {
      senderID: 1,
      message: "Okemi",
    },
  ]);

  // Listen all socket emitted
  useEffect(() => {
    socket.on("typing", (userName, err) => {
      if (err) throw err;
      console.log(userName, "is typing");
    });

    socket.on("new-message", (data, err) => {
      if (err) throw err;
      setMessages((old) => [...old, data]);
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
