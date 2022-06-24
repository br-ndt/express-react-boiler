const registerChatHandlers = (io, socket) => {
  io.on("userSendsMessage", (message) => {
    const serializedMessage = {
      sender: socket.id,
      content: message,
    };
    console.log(serializedMessage);
    io.emit("messageSent", serializedMessage);
  });
};

export default registerChatHandlers;
