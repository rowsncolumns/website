"use client";

import * as React from "react";
import Link from "next/link";

import { buttonVariants } from "../ui/button";

export function HeaderMenu() {
  return (
    <div className="grid row-start-2 col-span-2 lg:col-span-1 lg:row-start-auto lg:grid-cols-[repeat(6,minmax(min-content,max-content))] lg:gap-3 lg:justify-items-end lg:place-content-end">
      <Link href="/" className={buttonVariants({ variant: "ghost" })}>
        Home
      </Link>

      <Link href="/pricing" className={buttonVariants({ variant: "ghost" })}>
        Pricing
      </Link>
      <Link
        href="https://docs.rowsncolumns.app"
        className={buttonVariants({ variant: "ghost" })}
      >
        Documentation
      </Link>

      <Link href="/enterprise" className={buttonVariants({ variant: "ghost" })}>
        Enterprise
      </Link>

      <Link href="/contact" className={buttonVariants({ variant: "ghost" })}>
        Contact us
      </Link>

      <Link
        href="https://discord.gg/K4cNVh6"
        className={buttonVariants({ variant: "ghost" })}
      >
        Chat
      </Link>
    </div>
  );
}
