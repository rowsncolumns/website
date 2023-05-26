import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Pricing",
  };
};

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen p-2 min-w-0">
      <header className="flex flex-col  py-5">
        <h1 className="max-w-[900px] pb-5 text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Pricing
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          {siteConfig.taglineDescription}
        </p>
      </header>

      <div className="py-0 flex min-h-[600px] w-[1340px] max-w-full ml-auto mr-auto flex-col min-w-0"></div>
    </main>
  );
}
