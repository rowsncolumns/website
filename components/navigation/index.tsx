"use client";

import * as React from "react";
import Link from "next/link";
import { HamburgerMenuIcon } from "@rowsncolumns/icons";

import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export function HeaderMenu() {
  const [isVisible, setIsVisible] = React.useState(
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : false
  );

  const toggle = () => setIsVisible(!isVisible);
  return (
    <>
      <Button className="lg:!hidden" variant="outline" onClick={toggle}>
        <HamburgerMenuIcon />
      </Button>
      <div
        className={cn(
          "grid row-start-2 col-span-2 lg:col-span-1 lg:row-start-auto lg:grid-cols-[repeat(6,minmax(min-content,max-content))] lg:gap-3 lg:justify-items-end lg:place-content-end lg:!grid",
          isVisible ? undefined : "hidden"
        )}
      >
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

        <Link
          href="/enterprise"
          className={buttonVariants({ variant: "ghost" })}
        >
          Enterprise
        </Link>

        <Link href="/contact" className={buttonVariants({ variant: "ghost" })}>
          Contact us
        </Link>

        <Link
          href="https://discord.gg/K4cNVh6"
          className={buttonVariants({ variant: "ghost" })}
          target="_blank"
        >
          Chat
        </Link>
      </div>
    </>
  );
}
