import registerChatHandlers from "./registerChatHandlers.js";

const registerHandlers = (io, socket) => {
  registerChatHandlers(io, socket);
};

export default registerHandlers;