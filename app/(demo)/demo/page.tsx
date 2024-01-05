import { Spreadsheet } from "@/components/spreadsheet";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: `Demo - ${siteConfig.name}`,
  };
};

export default async function Demo() {
  return (
    <div className="m-2 flex-1 flex flex-col min-h-0 relative">
      <Spreadsheet />
    </div>
  );
}
