import { Spreadsheet } from "@/components/spreadsheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen p-2 min-w-0">
      <header className="flex flex-col text-center justify-center items-center py-5">
        <h1 className="max-w-[900px] pb-5 text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          {siteConfig.tagline}
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          {siteConfig.taglineDescription}
        </p>

        <div className="flex w-full items-center justify-center space-x-4 pb-4 pt-6 md:pb-10">
          <Link href="/" className={cn(buttonVariants())}>
            Get Started
          </Link>

          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.docs}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Documentation
          </Link>
        </div>
      </header>

      <div className="py-0 flex min-h-[600px] w-[1340px] max-w-full ml-auto mr-auto flex-col min-w-0">
        <Spreadsheet />
      </div>
    </main>
  );
}
