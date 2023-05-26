import "./../styles/globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";
import Link from "next/link";
import { HeaderMenu } from "@/components/navigation";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rows n' Columns",
  description: "Spreadsheet 2 - High performance Canvas Spreadsheet component",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container flex items-center">
          <div className="flex-1  items-center flex py-2">
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
              Rows n' Columns
            </Link>
            <HeaderMenu />
          </div>
        </div>
        <NextAuthProvider>
          <div className="container flex items-center">{children}</div>
        </NextAuthProvider>
        <footer>
          &copy; {new Date().getFullYear()} Rows n&apos; Columns. All rights
          reserved.
        </footer>
      </body>
    </html>
  );
}
