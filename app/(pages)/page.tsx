import { sample1, sample2, sample3 } from "@/components/code-samples";
import { Spreadsheet } from "@/components/spreadsheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { CodeHighlighter } from "@/components/ui/code-highlighter";
import { PageHeading } from "@/components/ui/page-heading";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: `Home - ${siteConfig.name}`,
    description:
      "Spreadsheet 2 - High performance Canvas Spreadsheet component",
  };
};

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen p-2 min-w-0 flex-1">
      <header className="flex flex-col text-center justify-center items-center py-8">
        <PageHeading>{siteConfig.tagline}</PageHeading>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          {siteConfig.taglineDescription}
        </p>

        <div className="flex w-full items-center justify-center space-x-4 pb-4 pt-6 md:pb-10">
          <Link href="/demo" className={cn(buttonVariants())}>
            Full Demo
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

      <div className="py-0 mb-12 flex min-h-[610px] w-[1340px] max-w-full ml-auto mr-auto flex-col min-w-0  relative">
        <Spreadsheet />
      </div>

      <hr />

      <div className="py-8 lg:px-4">
        <div className="flex flex-col text-center justify-center items-center pb-6">
          <h2 className="max-w-[900px] pb-5 text-3xl font-bold leading-tight tracking-tighter">
            Built for Developers
          </h2>
          <p className="text-md text-muted-foreground max-w-3xl">
            Spreadsheet is rendered in HTML Canvas, giving you ~60fps rendering
            performance and ability to display millions of rows and columns
            without peformance impact. With escape hatches, you can access the
            internals and customize it to your liking.
          </p>
        </div>

        <section className="grid lg:grid-cols-3 gap-6 py-6 lg:px-6 text-muted-foreground">
          <div className="lg:col-span-1">
            <h3 className="text-foreground text-2xl font-semibold pb-2">
              Compose the perfect Spreadsheet
            </h3>

            <p className="pb-4">
              Pick and choose the components you need to build your Spreadsheet.
            </p>

            <p className="pb-4">
              You can also build own custom functionality on top of Spreadsheet
              2, with the many callbacks from CanvasGrid.
            </p>

            <Link href="https://docs.rowsncolumns.app/configuration/components">
              <Button>See all components</Button>
            </Link>
          </div>
          <div className="lg:col-span-2 min-w-0">
            <CodeHighlighter>{sample1}</CodeHighlighter>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 py-6 lg:px-6 text-muted-foreground">
          <div className="lg:col-span-1">
            <h3 className="text-foreground text-2xl font-semibold pb-2">
              Bring your own Data model and State management
            </h3>
            <h4 className="pb-2">
              <em>Or use `useSpreadsheetState` hook</em>
            </h4>

            <p className="pb-4">
              Spreadsheet components are all uncontrolled and stateless. It
              renders based on the props that you pass-in and invokes callbacks
              to user actions.
            </p>

            <p className="pb-4">
              Spreadsheet 2 is agnostic of your data persistence model. You can
              choose any database for storage or real-time collaboration.
            </p>

            <Link href="https://docs.rowsncolumns.app/getting-started/spreadsheet-state">
              <Button>Learn more</Button>
            </Link>
          </div>
          <div className="lg:col-span-2 min-w-0">
            <CodeHighlighter>{sample2}</CodeHighlighter>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 py-6 lg:px-6 text-muted-foreground">
          <div className="lg:col-span-1">
            <h3 className="text-foreground text-2xl font-semibold pb-2">
              useSpreadsheetState hook
            </h3>
            <p className="pb-4">
              This is an optional (Production grade) hook if you want to get
              started with the Spreadsheet with complete state management.
            </p>
            <ul className="list-disc pl-4 pb-4">
              <li>Uses immer for state management.</li>
              <li>Full undo/redo capability.</li>
              <li>Calculation framework with optional web worker support.</li>
              <li>Real time collaboration built-in.</li>
            </ul>

            <Link href="https://docs.rowsncolumns.app/getting-started/spreadsheet-state">
              <Button>Learn more</Button>
            </Link>
          </div>
          <div className="lg:col-span-2 min-w-0">
            <CodeHighlighter>{sample3}</CodeHighlighter>
          </div>
        </section>
      </div>

      <hr />

      <div className="py-12 lg:px-4">
        <div className="flex flex-col text-center justify-center items-center pb-6">
          <h2 className="max-w-[900px] pb-5 text-3xl font-bold leading-tight tracking-tighter">
            Spreadsheet features
          </h2>
          <p className="text-md text-muted-foreground max-w-3xl">
            Built for developers. Spreadsheet is rendered in HTML Canvas, giving
            you ~60fps rendering performance and ability to display millions of
            rows and columns without peformance impact.
          </p>
        </div>

        <section className="grid lg:grid-cols-2 gap-6 py-6 lg:px-6">
          <div className="shadow-md rounded-md ">
            <Image
              src="/screenshot-structured.jpg"
              alt="Structured references"
              width={1240}
              height={567}
            />
          </div>
          <div className="flex-1 max-w-md">
            <h3 className="text-xl font-semibold pb-2">
              Structured references and Calculated columns
            </h3>

            <p className="pb-4 text-muted-foreground">
              Create tables and reference cells using column names. Add
              calculated columns, which syncs with dynamic table cells
            </p>

            <div className="flex-1"></div>

            <Link href="https://docs.rowsncolumns.app/configuration/features/structured-references">
              <Button>Learn more</Button>
            </Link>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 py-6 lg:px-6">
          <div className="shadow-md rounded-md ">
            <Image
              src="/screenshot-realtime.jpg"
              alt="Real time formulas"
              width={720}
              height={286}
            />
          </div>
          <div className="flex-1 max-w-md">
            <h3 className="text-xl font-semibold pb-2">Real-time formulas</h3>

            <p className="pb-4 text-muted-foreground">
              Add named JavaScript functions as formulas, which can connect to
              real-time data sources.
            </p>

            <div className="flex-1"></div>

            <Link
              href="https://docs.rowsncolumns.app/configuration/features/real-time-data"
              title="Learn more about real-time formulas"
            >
              <Button>Learn more</Button>
            </Link>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 py-6 lg:px-6">
          <div className="shadow-md rounded-md ">
            <Image
              src="/screenshot-collaboration.jpg"
              alt="Collaborate with users"
              width={720}
              height={374}
            />
          </div>
          <div className="flex-1 max-w-md">
            <h3 className="text-xl font-semibold pb-2">
              Collaborative editing
            </h3>

            <p className="pb-4 text-muted-foreground">
              Allow multiple users to work on a spreadsheet.
            </p>
            <p className="pb-4 text-muted-foreground">
              Agnostic of data strutures (CRDT/OT) or back-end stack. Use
              partykit, replicache etc.
            </p>

            <div className="flex-1"></div>

            <Link
              href="https://docs.rowsncolumns.app/collaboration/real-time-collaboration"
              title="Learn more about collaboration"
            >
              <Button>Learn more</Button>
            </Link>
          </div>
        </section>

        <hr />

        <div className="p-6 pl-4 pr-4">
          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <li>Conditional formatting with colors and color scales</li>
            <li>Data validation</li>
            <li>Frozen rows and columns</li>
            <li>Custom editors</li>
            <li>Custom tooltips</li>
            <li>Custom cell renderers</li>
            <li>Custom charts and embeds</li>
            <li>Cell styling</li>
            <li>Copy, Paste and Cut support</li>
            <li>Custom fonts</li>
            <li>Context menu</li>
            <li>Merge cells</li>
            <li>Show, Hide rows and columns</li>
            <li>Insert, Delete, Move rows and columns</li>
            <li>Dark mode</li>
            <li>Custom formula functions</li>
            <li>Protected ranges</li>
            <li>Named ranges</li>
            <li>Banded ranges</li>
            <li>Calculated columns</li>
            <li>Sorting filtering sheets and tables</li>
            <li>
              Easily integrate 3rd party APIs like OpenAI and other language
              models.
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
