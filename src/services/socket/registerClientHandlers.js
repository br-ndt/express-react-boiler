const registerClientHandlers = (socket, socketTimeout) => {
  socket.on("connect", () => {
    console.log("ok");
  });

  socket.on("connect_error", (error) => {
    console.log(`connect_error due to ${error.message}`);
    socketTimeout = setTimeout(() => socket.connect(), 5000);
  });

  socket.on("disconnect", () => {
    if(socketTimeout) clearTimeout(socketTimeout);
    console.log("socket disconnected");
  })
}

export default registerClientHandlers;