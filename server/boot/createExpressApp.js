import path from "path";
import express from "express";

import apiRouter from "../routes/api/apiRouter.js";

const createExpressApp = (serverFileName) => {
  const server__dirname = path.dirname(serverFileName);

  const app = express();
  app.use(express.json());

  if(process.env.NODE_ENV !== "development") {
    app.use(express.static(path.join(server__dirname, "..", "build")));
    app.get("/", (req, res) => {
      res.sendFile(path.join(server__dirname, "..", "build", "index.html"));
    });
  }

  app.use("/api", apiRouter);
  return app;
};

export default createExpressApp;
