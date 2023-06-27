import "./../../styles/globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./../providers";
import Link from "next/link";
import { HeaderMenu } from "@/components/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@rowsncolumns/icons";
import { Analytics } from "@vercel/analytics/react";
import { GTMHead } from "@/components/gtm-head";
import { GTMFooter } from "@/components/gtm-footer";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin-ext"] });

export default function RootLayout({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <GTMHead />
      </Head>
      <body className={inter.className}>
        <header className="border-b border-site-border">
          <div className="container items-center">
            <div className="grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] lg:grid-rows-1 items-center py-2 relative">
              <div className="items-center">
                <Link
                  href="/"
                  className="items-center inline-flex gap-4 font-semibold hover:bg-accent p-2 rounded-md text-md"
                  title={siteConfig.name}
                >
                  <Image
                    src="/logo-square.png?v=1"
                    alt="RowsnColumns"
                    width={128}
                    height={94}
                    className="rounded-sm max-w-[50px]"
                  />
                  Rows n&apos; Columns
                </Link>
              </div>

              <Button className="lg:!hidden" variant="outline">
                <HamburgerMenuIcon />
              </Button>

              <HeaderMenu />
            </div>
          </div>
        </header>
        <NextAuthProvider>
          <div className="container flex items-center">{children}</div>
        </NextAuthProvider>
        <hr className="border-border" />
        <footer className="bg-background relative">
          <div className="mx-auto max-w-[90rem] py-12 flex justify-center md:justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:gap-12  pl-6 pr-6 flex-1 md:flex-none">
              <div className="mt-12 md:!mt-0">
                <h3 className="text-sm ">Resources</h3>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {/* <li>
                    <a
                      className="text-sm no-underline transition text-muted-foreground hover:text-foreground"
                      href="/blog"
                    >
                      Blog
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://github.com/rowsncolumns/spreadsheet/releases"
                      className="text-sm no-underline  transition  text-muted-foreground hover:text-foreground"
                    >
                      Releases
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <h3 className="text-sm text-black dark:text-white">
                  Spreadsheet
                </h3>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  <li>
                    <a
                      className="text-sm no-underline  transition  text-muted-foreground hover:text-foreground"
                      href={siteConfig.links.docs}
                    >
                      Documentation
                    </a>
                  </li>
                  {/* <li>
                    <a
                      className="text-sm no-underline  transition  text-muted-foreground hover:text-foreground"
                      href="/faq"
                    >
                      FAQ
                    </a>
                  </li> */}
                </ul>
              </div>

              <div className="mt-12 md:!mt-0">
                <h3 className="text-sm text-black dark:text-white">Company</h3>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {/* <li>
                    <a
                      href="/about-us"
                      className="text-sm no-underline  transition  text-muted-foreground hover:text-foreground"
                    >
                      About us
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="/contact"
                      className="text-sm no-underline  transition  text-muted-foreground hover:text-foreground"
                    >
                      Contact Sales
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/rowsncolumns"
                      className="text-sm no-underline  transition  text-muted-foreground hover:text-foreground"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <h3 className="text-sm text-black dark:text-white">Legal</h3>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  <li>
                    <Link
                      className="text-sm no-underline  transition  text-muted-foreground hover:text-foreground"
                      href="/privacy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" legacyBehavior>
                      <a className="text-sm no-underline  transition  text-muted-foreground hover:text-foreground">
                        Terms of Service
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <h3 className="text-sm text-black dark:text-white">Support</h3>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  <li>
                    <a
                      href="https://github.com/rowsncolumns"
                      className="text-sm no-underline  transition  text-muted-foreground hover:text-foreground"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/K4cNVh6"
                      className="text-sm no-underline  transition  text-muted-foreground hover:text-foreground"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Analytics />
        </footer>
        <GTMFooter />
      </body>
    </html>
  );
}
