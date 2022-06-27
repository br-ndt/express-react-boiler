const registerChatHandlers = (io, socket) => {
  socket.on("userSendsMessage", (message) => {
    const serializedMessage = {
      sender: socket.id,
      content: message,
    };
    io.emit("messageSent", serializedMessage);
  });
};

export default registerChatHandlers;
