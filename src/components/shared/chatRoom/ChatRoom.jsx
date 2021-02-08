import "./ChatRoom.css";
import ChatSection from "./chatSection/ChatSection";
import NavSection from "./navSection/NavSection";

const ChatRoom = () => {
  const isPhone = window.innerWidth <= 500;

  function checkWhatToReturn() {
    return <ChatSection />;
  }

  if (isPhone) checkWhatToReturn();

  return (
    <div className="chat-room m-auto full-size">
      <NavSection />
      <ChatSection />
    </div>
  );
};
export default ChatRoom;
