import "./ChatRoom.css";
import ChatSection from "./chatSection/ChatSection";
import NavSection from "./navSection/NavSection";

const ChatRoom = () => {
  return (
    <div className="chat-room m-auto full-size">
      <NavSection />
      <ChatSection />
    </div>
  );
};
export default ChatRoom;
