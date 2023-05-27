import "./../styles/globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";
import Link from "next/link";
import { HeaderMenu } from "@/components/navigation";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rows n Columns",
  description: "Spreadsheet 2 - High performance Canvas Spreadsheet component",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <header className="border-b border-site-border">
          <div className="container flex items-center">
            <div className="flex-1 items-center flex py-2">
              <Link
                href="/"
                className="items-center flex gap-2 font-semibold hover:bg-accent p-2 rounded-md text-md"
                title={siteConfig.name}
              >
                <Image
                  src="/logo-2-full.png"
                  alt="RowsnColumns"
                  width={50}
                  height={50}
                  className="rounded-sm"
                />
                Rows n&apos; Columns
              </Link>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:gap-12">
              <div className="mt-12 md:!mt-0">
                <h3 className="text-sm ">Resources</h3>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  <li>
                    <a
                      className="text-sm no-underline transition text-muted-foreground hover:text-foreground"
                      href="/blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/vercel/turbo/releases"
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
                  <li>
                    <a
                      className="text-sm no-underline  transition  text-muted-foreground hover:text-foreground"
                      href="/faq"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-12 md:!mt-0">
                <h3 className="text-sm text-black dark:text-white">Company</h3>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  <li>
                    <a
                      href="/about-us"
                      className="text-sm no-underline  transition  text-muted-foreground hover:text-foreground"
                    >
                      About us
                    </a>
                  </li>
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
                    <a
                      className="text-sm no-underline  transition  text-muted-foreground hover:text-foreground"
                      href="/privacy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm no-underline  transition  text-muted-foreground hover:text-foreground"
                      href="/terms"
                    >
                      Terms of Service
                    </a>
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
        </footer>
      </body>
    </html>
  );
}
