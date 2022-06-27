const registerChatHandlers = (io, socket) => {
  socket.on("userSendsMessage", (message) => {
    const serializedMessage = {
      sender: socket.id,
      content: message,
    };
    console.log(serializedMessage);
    io.emit("messageSent", serializedMessage);
  });
};

export default registerChatHandlers;
