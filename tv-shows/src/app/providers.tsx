// app/providers.tsx
"use client";

import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const colors = {
  gray: {
    300: "#1f1f1f",
    200: "#3e3e3e",
    100: "#2c2c2c",
  },
  white: {
    100: "#f5f5f5",
  },
  primary: {
    100: "#f5c518",
    200: "#daaf16",
  },
};

const theme = extendTheme({ colors });

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
