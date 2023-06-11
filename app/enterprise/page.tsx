import { EnterpriseContact } from "@/components/contact-form";
import { PageHeading } from "@/components/ui/page-heading";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Enterprise",
  };
};

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen p-2 min-w-0 flex-1">
      <header className="flex flex-col text-center justify-center items-center py-8">
        <PageHeading>Talk to us for Enterprise licenses</PageHeading>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          We&apos;ll help you find the right plan and pricing for your business.
        </p>
      </header>

      <div className="py-0 flex min-h-[600px] w-[1340px] max-w-full flex-col min-w-0 ml-auto mr-auto">
        <div
          className="ml-auto mr-auto max-w-lg w-2/3 shadow-md p-4 bg-muted rounded-md mb-5 border-border border border-solid
          focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-0
        "
        >
          <EnterpriseContact />
        </div>

        <p className="text-center text-sm pb-2">
          We strive to reply to your email as soon as possible.
        </p>
        <p className="text-center text-sm pb-2">
          For other enquiries, please email us at{" "}
          <a href="mailto:sales@rowsncolumns.app">sales@rowsncolumns.app</a>
        </p>
      </div>
    </main>
  );
}
