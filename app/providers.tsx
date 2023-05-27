"use client";

import { ColorMode } from "@rowsncolumns/spreadsheet";
import { SessionProvider } from "next-auth/react";
import { ColorModeProvider } from "@/lib/theme";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <ColorModeProvider>
      <SessionProvider>{children}</SessionProvider>
    </ColorModeProvider>
  );
};
