import Joi from "joi";

export const companyInfoValidation = Joi.object().keys({
  companyName: Joi.string().required(),
  slogan: Joi.string().required(),
  style: Joi.string().required(),
  colors: Joi.string().required(),
  services: Joi.string().required(),
});
