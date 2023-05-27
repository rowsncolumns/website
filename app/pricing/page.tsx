import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/ui/page-heading";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";

export const generateMetadata = (): Metadata => {
  return {
    title: "Pricing",
  };
};

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen p-2 min-w-0 flex-1">
      <header className="flex flex-col text-center justify-center items-center py-8">
        <PageHeading>Pricing</PageHeading>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          {siteConfig.taglineDescription}
        </p>
      </header>

      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-10 lg:max-w-6xl lg:grid-cols-3">
        {/* Professional */}
        <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background">
          <h3 className="text-foreground">Professional</h3>
          <p className="relative mt-5 flex text-3xl tracking-tight text-foreground">
            <s>$4,999</s> <span className="text-green-600 ml-2">$2,499</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            You’re new to investing but want to do it right. Get started for
            free.
          </p>

          <div className="order-last mt-8">
            <ul className="-my-2 divide-y text-sm divide-muted text-muted-foreground">
              <li className="flex py-2">Perpetual license</li>
              <li className="flex py-2">1 year of updates and suppport</li>
              <li className="flex py-2">Single application use</li>
              <li className="flex py-2">Source code included</li>
            </ul>
          </div>

          <div className="mt-6">
            <Button>Buy Profressional License</Button>
          </div>
        </section>
        {/* / Professional */}

        {/* Professional */}
        <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background">
          <h3 className="text-foreground">Enterprise</h3>
          <p className="relative mt-5 flex text-3xl tracking-tight text-foreground">
            Contact us
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            If you are deploying the Spreadsheet inside your organization.
          </p>

          <div className="order-last mt-8">
            <ul className="-my-2 divide-y text-sm divide-muted text-muted-foreground">
              <li className="flex py-2">Perpetual license</li>
              <li className="flex py-2">Priority support</li>
              <li className="flex py-2">Unlimited applications</li>
              <li className="flex py-2">
                Flexible licensing based on users/developers.
              </li>
              <li className="flex py-2">Custom payment terms</li>
            </ul>
          </div>

          <div className="mt-6">
            <Link href="/contact">
              <Button>Contact Sales</Button>
            </Link>
          </div>
        </section>
        {/* / Professional */}

        {/* Professional */}
        <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background">
          <h3 className="text-foreground">OEM/Startups</h3>
          <p className="relative mt-5 flex text-3xl tracking-tight text-foreground">
            Contact us
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            If you would like to bundle Spreadsheet within your licensed
            application.
          </p>

          <div className="order-last mt-8">
            <ul className="-my-2 divide-y text-sm divide-muted text-muted-foreground">
              <li className="flex py-2">Perpetual license</li>
              <li className="flex py-2">1 year of updates and suppport</li>
              <li className="flex py-2">Single application use</li>
              <li className="flex py-2">Source code included</li>
              <li className="flex py-2">Deploy to external users</li>
            </ul>
          </div>

          <div className="mt-6">
            <Button>Contact Sales</Button>
          </div>
        </section>
        {/* / Professional */}
      </div>
    </main>
  );
}
