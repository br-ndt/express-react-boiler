import { fileURLToPath } from "url";
import dotenv from "dotenv";

import createExpressApp from "./boot/createExpressApp.js";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);

const SERVER_PORT = process.env.NODE_ENV === "development" ? 5000 : 8080;
const SERVER_HOST =
  process.env.NODE_ENV === "development" ? "localhost" : "0.0.0.0";

const express = createExpressApp(__filename);

express.listen(SERVER_PORT, SERVER_HOST, (error) => {
  if (error) console.log(error);
  console.log(`server started on port ${SERVER_PORT}`);
});
