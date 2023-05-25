import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";
import Link from "next/link";

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
        <header>
          <Link href="/">Home</Link>
          <Link href="/">Documentation</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Support</Link>
        </header>
        <NextAuthProvider>{children}</NextAuthProvider>
        <footer>
          &copy; {new Date().getFullYear()} Rows n&apos; Columns. All rights
          reserved.
        </footer>
      </body>
    </html>
  );
}
