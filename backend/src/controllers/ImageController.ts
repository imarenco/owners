import { Request, Response } from "express";
import { createImage } from "../resources/image";
import { CompanyInfo } from "../types/company";
import { buildPhrase } from "../util/prompt";
import { logger } from "../util/logger";
import ERRORS from "../util/errors";

async function create(req: Request, res: Response) {
  try {
    const companyInfo: CompanyInfo = req.body as CompanyInfo;

    const imageResponse = await createImage(buildPhrase(companyInfo), "png");
    res.setHeader("content-type", "image/png");
    res.send(Buffer.from(imageResponse.data, "base64"));
  } catch (e) {
    res
      .status(ERRORS.INTERNAL_SERVER_ERROR.CODE)
      .send(ERRORS.INTERNAL_SERVER_ERROR.MESSAGE);
    logger.error(e);
  }
}

export default { create };
