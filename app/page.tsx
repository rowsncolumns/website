import { Spreadsheet } from "@/components/spreadsheet";
import { buttonVariants } from "@/components/ui/button";
import { PageHeading } from "@/components/ui/page-heading";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen p-2 min-w-0 flex-1">
      <header className="flex flex-col text-center justify-center items-center py-8">
        <PageHeading>{siteConfig.tagline}</PageHeading>
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
