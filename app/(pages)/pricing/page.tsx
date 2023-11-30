import { Button, buttonVariants } from "@/components/ui/button";
import { PageHeading } from "@/components/ui/page-heading";
import { siteConfig } from "@/config/site";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const generateMetadata = (): Metadata => {
  return {
    title: `Pricing - ${siteConfig.name}`,
  };
};

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen p-2 min-w-0 flex-1">
      <header className="flex flex-col text-center justify-center items-center py-8">
        <PageHeading>Pricing</PageHeading>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Empower Your Growth with Clear Pricing: Unlock the Possibilities Today
        </p>
      </header>

      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-10 lg:max-w-full lg:grid-cols-4 pb-12 auto-rows-[1fr]">
        {/* Personal */}
        <section className="flex flex-col overflow-hidden rounded-3xl p-6 lg:min-h-full shadow-lg border-site-border border bg-background">
          <h3 className="text-foreground">Solo</h3>
          <p className="relative mt-5 flex text-3xl tracking-tight text-foreground">
            <s>$500</s> <span className="text-green-600 ml-2">$299</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            If you are a solo developer working on a single application.
          </p>

          <div className="order-last mt-8">
            <ul className="-my-2 divide-y text-sm divide-muted text-muted-foreground">
              <li className="flex py-2">Perpetual license</li>
              <li className="flex py-2">1 year of updates and support</li>
              <li className="flex py-2">Single application use</li>
              <li className="flex py-2">Source code included</li>
              <li className="flex py-2">Non-commercial use</li>
              <li className="flex flex-col py-2">
                Some features are not included
                <ul className="text-xs italic list-disc pl-4 pt-2">
                  <li>Moving columns and rows</li>
                  <li>Hidden rows and columns</li>
                  <li>Structured references</li>
                  <li>Charts and embeds</li>
                  <li>Named ranges</li>
                  <li>Collaboration</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <Link href="/contact" className={cn(buttonVariants())}>
              Contact Sales
            </Link>
          </div>
        </section>
        {/* / Personal */}

        {/* Personal */}
        <section className="flex flex-col overflow-hidden rounded-3xl p-6 lg:min-h-full shadow-lg border-site-border border bg-background">
          <h3 className="text-foreground">Personal</h3>
          <p className="relative mt-5 flex text-3xl tracking-tight text-foreground">
            <s>$5,000</s> <span className="text-green-600 ml-2">$1,999</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            If you are a developer looking for a full featured spreadsheet.
          </p>

          <div className="order-last mt-8">
            <ul className="-my-2 divide-y text-sm divide-muted text-muted-foreground">
              <li className="flex py-2">Perpetual license</li>
              <li className="flex py-2">1 year of updates and support</li>
              <li className="flex py-2">Single application use</li>
              <li className="flex py-2">Source code included</li>
              <li className="flex py-2">All features included</li>
              <li className="flex py-2">Use in commercial applications</li>
            </ul>
          </div>

          <div className="mt-6">
            <Link href="/contact" className={cn(buttonVariants())}>
              Contact Sales
            </Link>
          </div>
        </section>
        {/* / Personal */}

        {/* Personal */}
        <section className="flex flex-col overflow-hidden rounded-3xl p-6 lg:min-h-full shadow-lg border-site-border border bg-background">
          <h3 className="text-foreground">Team</h3>
          <p className="relative mt-5 flex text-3xl tracking-tight text-foreground">
            Upto 25 developers
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            If you have a team of developers or contractors working on
            Spreadsheet 2
          </p>

          <div className="order-last mt-8">
            <ul className="-my-2 divide-y text-sm divide-muted text-muted-foreground">
              <li className="flex py-2">Perpetual license</li>
              <li className="flex py-2">1 year of updates and support</li>
              <li className="flex py-2">Single application use</li>
              <li className="flex py-2">Source code included</li>
              <li className="flex py-2">
                Flexible licensing based on users/developers.
              </li>
              <li className="flex py-2">Custom payment terms</li>
              <li className="flex py-2">Use in commercial applications</li>
            </ul>
          </div>

          <div className="mt-6">
            <Link href="/contact" className={cn(buttonVariants())}>
              Contact Sales
            </Link>
          </div>
        </section>
        {/* / Professional */}

        {/* Professional */}
        <section className="flex flex-col overflow-hidden rounded-3xl p-6 lg:min-h-full shadow-lg border-site-border border bg-background">
          <h3 className="text-foreground">Enterprise</h3>
          <p className="relative mt-5 flex text-3xl tracking-tight text-foreground">
            Custom
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            If you are deploying the Spreadsheet inside your organization or in
            your paid product.
          </p>

          <div className="order-last mt-8">
            <ul className="-my-2 divide-y text-sm divide-muted text-muted-foreground">
              <li className="flex py-2">Perpetual license</li>
              <li className="flex py-2">1 year of updates and support</li>
              <li className="flex py-2">Unlimited application use</li>
              <li className="flex py-2">Source code included</li>
              <li className="flex py-2">
                Deploy to internal or external users
              </li>
              <li className="flex py-2">Use in commercial applications</li>
              <li className="flex py-2">Priority support</li>
            </ul>
          </div>

          <div className="mt-6">
            <Link href="/enterprise" className={cn(buttonVariants())}>
              Contact Sales
            </Link>
          </div>
        </section>
        {/* / Professional */}
      </div>

      <hr className="border-border" />

      <div className="py-8">
        <h2 className="text-foreground text-2xl font-semibold pb-4">
          Frequenty asked questions
        </h2>
        <p className="text-muted-foreground text-md pb-6">
          If you can&apos;t find what you&apos;re looking for, email our support
          team and someone will get back to you.
        </p>

        <h3 className="text-muted-foreground text-md font-semibold">General</h3>
        <Accordion type="single" collapsible className="w-full pb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              What is your refund policy?
            </AccordionTrigger>
            <AccordionContent>
              If you&apos;re unhappy with your purchase for any reason, email us
              at{" "}
              <a href="mailto:support@rowsncolumns.com" className="underline">
                support@rowsncolumns.app
              </a>{" "}
              within 7 days(Solo) and 30 days (All other licenses) and
              we&apos;ll refund you in full, no questions asked.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              What does perpetual license mean?
            </AccordionTrigger>
            <AccordionContent>
              <p className="pb-2">
                When you purchase Spreadsheet 2, you are granted a license to
                use a version of the product in perpetuity. There are no further
                charges until you choose to extend your license to cover newer
                versions.
              </p>

              <p>
                Please note that while use of the software is perpetual, Support
                and Corrective Maintenance are not. We do not provide issue
                resolution to versions of SpreadSheet Grid Developer older than
                12 months.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              What browsers are supported?
            </AccordionTrigger>
            <AccordionContent>
              <p className="pb-2">
                The components in Spreadsheet are designed to work in the
                latest, stable releases of all major browsers, including Chrome,
                Firefox, Safari, and Edge.
              </p>
              <p>We don&apos;t support Internet Explorer 11.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h3 className="text-muted-foreground text-md font-semibold">License</h3>
        <Accordion type="single" collapsible className="w-full pb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              Do I need to purchase a license for each project/application I
              work on?
            </AccordionTrigger>
            <AccordionContent>
              <p className="pb-4">
                Yes. Each Personal or Team license is for a Single application
                use. It is bound to an application name and can&apos;t be
                re-used on other application at the same time.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              Can I upgrade to a team license later?
            </AccordionTrigger>
            <AccordionContent>
              <p className="pb-4">
                <p className="pb-2">
                  Yup! If you&apos;re a solo developer you can start with a
                  personal license, and then upgrade to the team license later
                  if other developers join your team.
                </p>

                <p className="pb-2">
                  Please email{" "}
                  <a
                    href="mailto:support@rowsncolumns.com"
                    className="underline"
                  >
                    support@rowsncolumns.app
                  </a>{" "}
                  to upgrade to a teams license.
                </p>
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              Can I use Spreadsheet 2 for client projects?
            </AccordionTrigger>
            <AccordionContent>
              <p className="pb-2">
                Yes. Please{" "}
                <Link href="/contact" className="underline">
                  contact us
                </Link>{" "}
                to purchase an OEM license.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              Can I use Spreadsheet 2 for my own commercial projects?
            </AccordionTrigger>
            <AccordionContent>
              <p className="pb-4">
                All personal, team and enterprise licenses can be used on
                commercial projects.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              Can I use Spreadsheet 2 in open source projects?
            </AccordionTrigger>
            <AccordionContent>
              <p className="pb-4">
                Yep! As long as what you&apos;re building is some sort of actual
                website and not a derivative Spreadsheet library, builder, or
                other product where the primary purpose is clearly to repackage
                and redistribute the Spreadsheet, it&apos;s totally okay for
                that project to be open source.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h3 className="text-muted-foreground text-md font-semibold">Support</h3>
        <Accordion type="single" collapsible className="w-full pb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              Do you offer technical support?
            </AccordionTrigger>
            <AccordionContent>
              Yes. We do offer technical support to integrate Spreadsheet 2
              within your application.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              How can we get in touch?
            </AccordionTrigger>
            <AccordionContent>
              The fastest way to contact us via{" "}
              <a className="underline" href="https://discord.gg/K4cNVh6">
                Discord chat
              </a>
              . You can also contact us either via{" "}
              <a className="underline" href="mailto:sales@rowsncolumns.app">
                email
              </a>{" "}
              or the{" "}
              <Link className="underline" href={"/contact"}>
                contact form
              </Link>{" "}
              We will reply to your email within 24 hours. Enterprise customers
              can expect a response within 6-8 hours.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
