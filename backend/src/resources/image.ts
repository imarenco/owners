import axios from "axios";
import { config } from "../config/env";
import FormData from "form-data";

const TOKEN = config.STABILITY_TOKEN;

export function createImage(prompt: string, output: string) {
  const formData = {
    prompt,
    output,
  };

  return axios.postForm(
    `https://api.stability.ai/v2beta/stable-image/generate/core`,
    axios.toFormData(formData, new FormData()),
    {
      validateStatus: undefined,
      responseType: "arraybuffer",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "image/*",
      },
    }
  );
}
