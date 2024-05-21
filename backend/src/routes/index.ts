import { Express } from "express";
import imageRouter from "./image";

export default (app: Express) => {
  app.use("/image", imageRouter);
};
