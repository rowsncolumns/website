"use client";
import React, { useState } from "react";
import { Stack, Input, canUseDOM } from "@rowsncolumns/ui";
import { Button } from "./ui/button";
import Script from "next/script";

const RECAPTCHA_KEY = "6Lfr4s8mAAAAABzgv4bDydj2jaa-621n6Zvuuadz";

export const EnterpriseContact = () => {
  const [result, setResult] = useState<boolean | undefined>(undefined);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canUseDOM) {
      //@ts-ignore
      grecaptcha.ready(function () {
        //@ts-ignore
        grecaptcha
          .execute(RECAPTCHA_KEY, { action: "submit" })
          .then(async () => {
            const formData = new FormData(e.target as HTMLFormElement);
            try {
              const response = await fetch("/api/mail", {
                method: "POST",
                body: JSON.stringify(Object.fromEntries(formData)),
              }).then((res) => {
                if (!res.ok) {
                  throw Error("Something went wrong while sending email.");
                }
              });

              setResult(true);
            } catch (err) {
              setResult(false);
            }
          });
      });
    }
  };
  return (
    <form onSubmit={onSubmit}>
      {result === true ? (
        <div className="p-2 bg-green-700 text-white mb-4 text-sm rounded-sm">
          We have received your email and we will get back to you shortly.
        </div>
      ) : null}

      {result === false ? (
        <div className="p-2 bg-red-700 text-white mb-4 text-sm rounded-sm">
          Something went wrong while sending an email. Please try again.
        </div>
      ) : null}
      <Stack direction="vertical" className="pb-4 gap-2">
        <label className="text-sm">Name</label>
        <Input
          className="focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 p-2 bg-background"
          type="text"
          name="name"
          required
        />
      </Stack>

      <Stack direction="vertical" className="gap-2 pb-4">
        <label className="text-sm">Company name</label>
        <Input
          className="focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 p-2  bg-background"
          type="text"
          name="company"
        />
      </Stack>

      <Stack direction="vertical" className="gap-2 pb-4">
        <label className="text-sm">Email</label>
        <Input
          className="focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 p-2  bg-background"
          type="email"
          name="email"
          required
        />
      </Stack>

      <Stack direction="vertical" className="gap-2 pb-5">
        <label className="text-sm">How Can We Help You?</label>
        <textarea
          className="p-2 rounded-sm border border-border border-solid focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 outline-none  bg-background"
          name="message"
          required
          rows={5}
        />
      </Stack>

      <Button>Send</Button>

      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`}
      ></Script>
    </form>
  );
};
