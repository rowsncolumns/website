"use client";
// @ts-ignore
import TagManager from "react-gtm-module";

import { useEffect } from "react";

export const GTMHead = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MWFSTRX" });
  }, []);

  return null;
};
