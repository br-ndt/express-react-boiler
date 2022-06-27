import { createContext, useEffect, useRef, useState } from "react";
import socketIO from "socket.io-client";
import socketEndpoint from "../services/socket/getSocketEndpoint.js";
import registerClientHandlers from "../services/socket/registerClientHandlers.js";

export const SocketContext = createContext({});

const SocketProvider = ({ children }) => {
  const socket = useRef(socketIO(socketEndpoint));

  useEffect(() => {
    let socketTimeout;
    socket.current.connect();
    registerClientHandlers(socket.current, socketTimeout);
    
    return () => {
      if (socketTimeout) clearTimeout(socketTimeout);
      socket.current.close();
    }
  }, [])

  console.log(socket.current);

  return (
    <SocketContext.Provider value={socket.current}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
