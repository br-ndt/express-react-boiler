const registerClientHandlers = (socket, socketTimeout) => {
  socket.on("connect", () => {
    console.log(socket.current);
  })

  socket.on("connect_error", () => {
    socketTimeout = setTimeout(() => socket.connect(), 5000);
  });
}

export default registerClientHandlers;