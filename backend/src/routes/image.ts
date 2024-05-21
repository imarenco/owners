import { Router } from "express";
import imageController from "../controllers/ImageController";
import schemaValidator from "../middlewares/schemaValidator";
import { companyInfoValidation } from "../validations/companyInfo";
const image: Router = Router();

image.post("/", schemaValidator(companyInfoValidation), imageController.create);

export default image;
