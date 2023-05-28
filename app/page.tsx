import { Spreadsheet } from "@/components/spreadsheet";
import { Button, buttonVariants } from "@/components/ui/button";
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

      <div className="py-0 mb-12 flex min-h-[610px] w-[1340px] max-w-full ml-auto mr-auto flex-col min-w-0">
        <Spreadsheet />
      </div>

      <hr />

      <div className="py-8 pl-4 pr-4">
        <div className="flex flex-col text-center justify-center items-center">
          <h2 className="max-w-[900px] pb-5 text-3xl font-bold leading-tight tracking-tighter">
            High performance ReactJS Spreadsheet
          </h2>
          <p className="text-md text-muted-foreground max-w-3xl">
            Built for developers. Spreadsheet is rendered in HTML Canvas, giving
            you ~60fps rendering performance and ability to display millions of
            rows and columns without peformance impact.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-10  lg:grid-cols-3 pb-0">
          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background text-muted-foreground">
            <h3 className="text-foreground text-xl font-semibold pb-4">
              Bring your own Data model and State management library.
            </h3>
            <p className="pb-4">
              Developers can choose how to model their Spreadsheet data. It
              could be array of cells or object of cells. CanvasGrid accepts
              `getCellData` callback which should return a CellData object
            </p>

            <p className="pb-4">
              We provide an optional `useSpreadsheetState` hook to manage
              Spreadsheet state.
            </p>

            <Link href="https://docs.rowsncolumns.app/getting-started/spreadsheet-state">
              <Button>Learn more</Button>
            </Link>
          </section>

          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background text-muted-foreground min-h-full">
            <h3 className="text-foreground text-xl font-semibold pb-4">
              Compose the perfect Spreadsheet
            </h3>
            <p className="pb-4">
              Pick and choose the components you need to build your Spreadsheet.
            </p>

            <div className="flex-1"></div>

            <Link href="https://docs.rowsncolumns.app/configuration/components">
              <Button>See all components</Button>
            </Link>
          </section>

          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background text-muted-foreground  min-h-full">
            <h3 className="text-foreground text-xl font-semibold pb-4">
              Structured references and Calculated columns
            </h3>

            <p className="pb-4">
              Create tables and reference cells using column names. Add
              calculated columns, which syncs with dynamic table cells
            </p>

            <div className="flex-1"></div>

            <Link href="https://docs.rowsncolumns.app/configuration/features/structured-references">
              <Button>Learn more</Button>
            </Link>
          </section>
        </div>
      </div>

      <div className="py-12 pl-4 pr-4">
        <div className="flex flex-col text-center justify-center items-center">
          <h2 className="max-w-[900px] pb-5 text-3xl font-bold leading-tight tracking-tighter">
            Spreadsheet features
          </h2>
          <p className="text-md text-muted-foreground max-w-3xl">
            Built for developers. Spreadsheet is rendered in HTML Canvas, giving
            you ~60fps rendering performance and ability to display millions of
            rows and columns without peformance impact.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-10  lg:grid-cols-3 pb-0">
          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background text-muted-foreground">
            <h3 className="text-foreground text-xl font-semibold pb-4">
              Powerful Calculation Engine
            </h3>
            <p className="pb-4">
              With a chevrotain based formula parser and a JavaScript based
              calculation engine, its easy to customize and add named formulas.
            </p>

            <p className="pb-4">
              Calculations can also be moved to a web-worker (80% feature
              complete)
            </p>

            <Link href="https://docs.rowsncolumns.app/getting-started/spreadsheet-state">
              <Button>Learn more</Button>
            </Link>
          </section>

          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background text-muted-foreground">
            <h3 className="text-foreground text-xl font-semibold pb-4">
              Asynchonous and Real-time calculations
            </h3>
            <p className="pb-4">
              Allow multiple users to work on a spreadsheet.
            </p>

            <p className="pb-4">
              Agnostic of data strutures (CRDT/OT) or back-end stack. Use
              partykit, replicache etc.
            </p>

            <Link href="https://docs.rowsncolumns.app/getting-started/spreadsheet-state">
              <Button>Learn more</Button>
            </Link>
          </section>

          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background text-muted-foreground">
            <h3 className="text-foreground text-xl font-semibold pb-4">
              Collaborative editing
            </h3>
            <p className="pb-4">
              Allow multiple users to work on a spreadsheet.
            </p>

            <p className="pb-4">
              Agnostic of data strutures (CRDT/OT) or back-end stack. Use
              partykit, replicache etc.
            </p>

            <Link href="https://docs.rowsncolumns.app/getting-started/spreadsheet-state">
              <Button>Learn more</Button>
            </Link>
          </section>

          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background text-muted-foreground">
            <h3 className="text-foreground text-xl font-semibold pb-4">
              Conditional formatting
            </h3>
            <p className="pb-4">
              Allow multiple users to work on a spreadsheet.
            </p>

            <p className="pb-4">
              Agnostic of data strutures (CRDT/OT) or back-end stack. Use
              partykit, replicache etc.
            </p>

            <Link href="https://docs.rowsncolumns.app/getting-started/spreadsheet-state">
              <Button>Learn more</Button>
            </Link>
          </section>

          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background text-muted-foreground">
            <h3 className="text-foreground text-xl font-semibold pb-4">
              Data validation
            </h3>
            <p className="pb-4">
              Allow multiple users to work on a spreadsheet.
            </p>

            <p className="pb-4">
              Agnostic of data strutures (CRDT/OT) or back-end stack. Use
              partykit, replicache etc.
            </p>

            <Link href="https://docs.rowsncolumns.app/getting-started/spreadsheet-state">
              <Button>Learn more</Button>
            </Link>
          </section>

          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background text-muted-foreground">
            <h3 className="text-foreground text-xl font-semibold pb-4">
              Custom Cell Renderers, Editors, Tooltips, Context Menu etc
            </h3>
            <p className="pb-4">Custom Cell Renderers, Editors, Tooltips</p>

            <p className="pb-4">
              Agnostic of data strutures (CRDT/OT) or back-end stack. Use
              partykit, replicache etc.
            </p>

            <Link href="https://docs.rowsncolumns.app/getting-started/spreadsheet-state">
              <Button>Learn more</Button>
            </Link>
          </section>

          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background text-muted-foreground">
            <h3 className="text-foreground text-xl font-semibold pb-4">
              Embed Charts, images and external content
            </h3>
            <p className="pb-4">
              Drag and Drop images, CSV files into Spreadsheet.
            </p>

            <p className="pb-4">
              With the built-in API to add external content like charts, images,
              canvas drawings etc, its easy to build a full blown excel like
              solution.
            </p>

            <Link href="https://docs.rowsncolumns.app/getting-started/spreadsheet-state">
              <Button>Learn more</Button>
            </Link>
          </section>

          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background text-muted-foreground">
            <h3 className="text-foreground text-xl font-semibold pb-4">
              Import and Export CSV, Excel and Google sheets
            </h3>
            <p className="pb-4">
              Drag and Drop images, CSV files into Spreadsheet.
            </p>

            <p className="pb-4">
              With the built-in API to add external content like charts, images,
              canvas drawings etc, its easy to build a full blown excel like
              solution.
            </p>

            <Link href="https://docs.rowsncolumns.app/getting-started/spreadsheet-state">
              <Button>Learn more</Button>
            </Link>
          </section>

          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background text-muted-foreground">
            <h3 className="text-foreground text-xl font-semibold pb-4">
              Insert, delete rows and columns
            </h3>
            <p className="pb-4">
              Drag and Drop images, CSV files into Spreadsheet.
            </p>

            <p className="pb-4">
              With the built-in API to add external content like charts, images,
              canvas drawings etc, its easy to build a full blown excel like
              solution.
            </p>

            <Link href="https://docs.rowsncolumns.app/getting-started/spreadsheet-state">
              <Button>Learn more</Button>
            </Link>
          </section>

          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg border-site-border border bg-background text-muted-foreground">
            <h3 className="text-foreground text-xl font-semibold pb-4">
              Themeing and Dark mode
            </h3>
            <p className="pb-4">
              Drag and Drop images, CSV files into Spreadsheet.
            </p>

            <p className="pb-4">
              With the built-in API to add external content like charts, images,
              canvas drawings etc, its easy to build a full blown excel like
              solution.
            </p>

            <Link href="https://docs.rowsncolumns.app/getting-started/spreadsheet-state">
              <Button>Learn more</Button>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
