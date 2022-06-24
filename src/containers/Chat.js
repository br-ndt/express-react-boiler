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
    return () => {
      if(socket) {
        socket.off("messageSent");
      }
    }
  }, [socket, messages]);

  const sendMessage = (event, message) => {
    if(socket) {
      console.log(socket.id, message);
      socket.emit("userSendsMessage", message);
    }
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
