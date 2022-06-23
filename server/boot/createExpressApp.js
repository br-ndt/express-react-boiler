import path from "path";
import express from "express";
import apiRouter from "../routes/api/apiRouter.js";

const createExpressApp = (serverFileName) => {
  const server__dirname = path.dirname(serverFileName);
  const app = express();
  app.use(express.json());
  
  app.get("/", (req, res) => {
    res.sendFile(path.join(server__dirname, "public", "index.html"));
  });
  
  app.use((req, res, next) => {
    res.sendFile(path.join(server__dirname, "..", "build", "index.html"));
  });
  
  if(process.env.NODE_ENV === "development") {
    app.use(express.static("public"));
  } else {
    app.use(express.static(path.join(server__dirname, "..", "build")));
  }
  
  app.use("/api", apiRouter);
  return app;
}

export default createExpressApp;