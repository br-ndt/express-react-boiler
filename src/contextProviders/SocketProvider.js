import { createContext, useEffect, useRef, useState } from "react";
import socketIO from "socket.io-client";
import registerClientHandlers from "../services/socket/registerClientHandlers.js";

export const SocketContext = createContext({});

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    let socketTimeout;

    const newSocket = socketIO(window.location.origin, {
      path: "/ws",
      transports: ["websocket"]
    });
    registerClientHandlers(newSocket, socketTimeout);
    setSocket(newSocket);
    
    return () => {
      if (socketTimeout) clearTimeout(socketTimeout);
      newSocket.close();
    }
  }, [setSocket])

  console.log(socket);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
