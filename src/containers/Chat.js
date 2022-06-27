import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../contextProviders/SocketProvider.js";
import ChatEntry from "./chat/ChatEntry.js";
import ChatMessage from "./chat/ChatMessage.js";
import "../scss/components/Chat.scss";

const Chat = () => {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if(socket) {
      socket.on("messageSent", (message) => {
        setMessages([...messages, message])
      });
    }
    return () => {
      if(socket) {
        socket.off("messageSent");
      }
    }
  }, [socket, messages]);

  const sendMessage = (event, message) => {
    if(socket) {
      console.log(socket);
      socket.emit("userSendsMessage", message);
    }
  }

  const messageList = messages.map((message, index) => {
    console.log(message.sender === socket.id);
    return <ChatMessage key={index} data={message} isOwner={message.sender === socket.id} />;
  });

  return (
    <section className="Chat">
      <div className="chatBody">
        {messageList}
      </div>
      <ChatEntry sendMessage={sendMessage}/>
    </section>
  );
};

export default Chat;
