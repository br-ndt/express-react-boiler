import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";

import createExpressApp from "./boot/createExpressApp.js";
import onSocketConnection from "./boot/onSocketConnection.js";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);

const SERVER_PORT = process.env.NODE_ENV === "development" ? 5000 : 8080;
const SOCKET_ORIGIN =
  process.env.NODE_ENV === "development"
    ? `http://localhost:3000`
    : `http://localhost:${SERVER_PORT}`;

const server = createServer(createExpressApp(__filename));
const io = new Server(server, {
  cors: {
    origin: SOCKET_ORIGIN,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  onSocketConnection(io, socket);
});

server.listen(SERVER_PORT, "0.0.0.0", (error) => {
  if (error) console.log(error);
  console.log(`listening for socket requests from ${SOCKET_ORIGIN}`)
  console.log(`server started on port ${SERVER_PORT}`);
});
