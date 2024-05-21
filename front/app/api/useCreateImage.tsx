import { useMutation } from "react-query";
import { CompanyInfo } from "../types/company";

const BASE_URL = process.env.BASE_URL || "http://localhost:4000";
export function useCreateImage() {
  return useMutation((company: CompanyInfo) =>
    fetch(`${BASE_URL}/image`, {
      method: "POST",
      body: JSON.stringify(company),
      headers: {
        "Content-type": "application/json",
      },
    })
  );
}
