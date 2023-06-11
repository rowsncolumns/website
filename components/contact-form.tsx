"use client";
import React from "react";
import { Stack, Input } from "@rowsncolumns/ui";
import { Button } from "./ui/button";

export const EnterpriseContact = () => {
  return (
    <form>
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
          name="company_name"
          required
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

      <Button>Submit</Button>
    </form>
  );
};
