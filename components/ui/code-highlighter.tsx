"use client";
import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/esm/styles/prism/coldark-dark";
//@ts-ignore
import { typescript } from "react-syntax-highlighter/dist/esm/languages/prism";

SyntaxHighlighter.registerLanguage("jsx", typescript);

export const CodeHighlighter = ({
  children,
}: {
  children: string | string[];
}) => {
  return (
    // @ts-ignore
    <SyntaxHighlighter
      language="javascript"
      style={docco}
      wrapLongLines
      customStyle={{
        width: "100%",
        maxHeight: 600,
        overflow: "auto",
        fontSize: 13,
        margin: 0,
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};
