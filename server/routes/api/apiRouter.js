import express from "express";
import TestSerializer from "../../serializers/TestSerializer.js";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
  res.status(200).json(TestSerializer.getTestData());
});

apiRouter.get("/:id", (req, res) => {
  res.status(200).json(TestSerializer.getIndividualTest(req.params.id));
});

export default apiRouter;
