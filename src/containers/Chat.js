import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../contextProviders/SocketProvider.js";
import ChatEntry from "./chat/ChatEntry.js";
import ChatMessage from "./chat/ChatMessage.js";

const Chat = () => {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if(socket) {
      socket.on("messageSent", (message) => {
        setMessages([...messages, message])
      });
    }
  }, [socket]);

  const sendMessage = () => {

  }

  const messageList = messages.map((message, index) => {
    return <ChatMessage key={index} data={message} />;
  });

  return (
    <section className="chat">
      <div className="chatBody">
        {messageList}
      </div>
      <ChatEntry sendMessage={sendMessage}/>
    </section>
  );
};

export default Chat;
