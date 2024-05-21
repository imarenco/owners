import { CompanyInfo } from "../types/company";

export function buildPhrase(companyInfo: CompanyInfo): string {
  return `create an icon for a company with name ${companyInfo.companyName}, that offers services such as ${companyInfo.services} and
    where the company slogan is ${companyInfo.slogan}. Let the colors be ${companyInfo.colors} and icon style ${companyInfo.style}`;
}
