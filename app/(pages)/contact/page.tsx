import { EnterpriseContact } from "@/components/contact-form";
import { PageHeading } from "@/components/ui/page-heading";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: `Contact us - ${siteConfig.name}`,
  };
};

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen p-2 min-w-0 flex-1">
      <header className="flex flex-col text-center justify-center items-center py-8">
        <PageHeading>Contact Us</PageHeading>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Talk to our sales team about your requirements, learn about custom
          pricing, or request a demo.
        </p>
      </header>

      <div className="py-0 w-[1000px] max-w-full min-w-0 grid lg:grid-cols-2 ml-auto mr-auto gap-5">
        <div>
          <h2 className="text-lg font-semibold pb-2 pt-5">Sales enquiries</h2>
          <p className="text-sm pb-2">
            For sales enquiries contact us at{" "}
            <a href="mailto:sales@rowsncolumns.app">sales@rowsncolumns.app</a>
          </p>

          <h2 className="text-lg font-semibold pb-2 pt-5">Company</h2>

          <p className="text-sm pb-2">
            RowsnColumns <br />
            75 Punggol Central, #05-78 <br />
            Singapore - 828757
          </p>

          <p className="text-sm pb-2">UEN: 53466564X</p>
        </div>
        <div className="ml-auto mr-auto w-full lg:w-full shadow-md p-4 bg-muted rounded-md mb-5 border-border border border-solid focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-0">
          <EnterpriseContact />
        </div>
      </div>
    </main>
  );
}
