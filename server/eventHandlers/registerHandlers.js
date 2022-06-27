import registerChatHandlers from "./registerChatHandlers.js";

const registerHandlers = (io, socket) => {
  socket.on("disconnect", () => console.log(`${socket.id} disconnected`));
  registerChatHandlers(io, socket);
};

export default registerHandlers;