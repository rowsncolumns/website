"use client";

import { ColorModeProvider } from "@/lib/theme";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <ColorModeProvider>{children}</ColorModeProvider>;
};
