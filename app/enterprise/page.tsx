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

      <div className="py-0 flex min-h-[600px] w-[1340px] max-w-full ml-auto mr-auto flex-col min-w-0"></div>
    </main>
  );
}
