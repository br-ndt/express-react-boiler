import { useContext } from "react";
import { SocketContext } from "../contextProviders/SocketProvider.js";

const Chat = () => {
  const socket = useContext(SocketContext);
  return <p>Hello {socket?.id} </p>
}

export default Chat;