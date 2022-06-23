import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";

import createExpressApp from "./boot/createExpressApp.js";
import onSocketConnection from "./boot/onSocketConnection.js";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);

const SERVER_PORT = process.env.NODE_ENV === "development" ? 5000 : 8080;

const express = createExpressApp(__filename);
const server = createServer(express);
const io = new Server(server, {
  path: "/ws",
});

io.on("connection", (socket) => {
  onSocketConnection(io, socket);
});

server.listen(SERVER_PORT, "0.0.0.0", (error) => {
  if (error) console.log(error);
  console.log(`server started on port ${SERVER_PORT}`);
});
