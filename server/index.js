import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";

import apiRouter from "./routes/api/apiRouter.js";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SERVER_PORT = process.env.NODE_ENV === "development" ? 5000 : 8080;

const app = express();
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(SERVER_PORT, () => {
  console.log(`server started on port ${SERVER_PORT}`);
});
