import { createContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import registerClientHandlers from "../services/socket/registerClientHandlers.js";

export const SocketContext = createContext({});

const SocketProvider = ({ children }) => {
  const socket = useRef({});

  useEffect(() => {
    let socketTimeout;

    socket.current = io(window.location.origin, {
      path: "/ws/",
    });

    registerClientHandlers(socket.current, socketTimeout);

    return () => {
      if (socketTimeout) clearTimeout(socketTimeout);
      socket.current.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket.current}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
