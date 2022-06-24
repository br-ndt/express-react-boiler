const registerClientHandlers = (socket, socketTimeout) => {
  socket.on("connect", () => {
    
  });

  socket.on("connect_error", (error) => {
    console.log(`connect_error due to ${error.message}`);
    socketTimeout = setTimeout(() => socket.connect(), 5000);
  });
}

export default registerClientHandlers;