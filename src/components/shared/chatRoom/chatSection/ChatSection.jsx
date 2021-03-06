import { ChatAppBar, Message } from "../../Shared";
import "./ChatSection.css";

const ChatSection = () => {
  function handleChange(e) {}
  return (
    <div className="chat-section">
      <ChatAppBar />

      <div className="messages m-f-c no-scrollbar">
        <Message sent />
        <Message />
        <Message sent />
        <Message />
        <Message sent />
        <Message />
      </div>

      <div className="input soft-shadow row bg-white a-c">
        <button className="circle-avatar extras">+</button>
        <form action="" className="row">
          <input
            type="text"
            placeholder="Type message"
            onChange={handleChange}
          />

          <button className="">
            <img src="/icons/send.svg" alt="Mantul" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default ChatSection;
