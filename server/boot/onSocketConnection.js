import registerHandlers from "../eventHandlers/registerHandlers.js";

const onSocketConnection = (io, socket) => {
  console.log(`${socket.id} connected`);
  registerHandlers(io, socket);
}

export default onSocketConnection;