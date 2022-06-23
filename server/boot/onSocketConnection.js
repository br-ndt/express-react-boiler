import registerHandlers from "../eventHandlers/registerHandlers.js";

const onSocketConnection = (io, socket) => {
  registerHandlers(io, socket);
}

export default onSocketConnection;