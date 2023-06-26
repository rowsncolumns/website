import "./../../styles/globals.css";
import Link from "next/link";
import { NextAuthProvider } from "./../providers";
import { Inter } from "next/font/google";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { HeaderMenu } from "@/components/navigation";
import { HamburgerMenuIcon } from "@rowsncolumns/icons";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin-ext"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={cn("h-full flex-1 flex flex-col", inter.className)}>
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
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
