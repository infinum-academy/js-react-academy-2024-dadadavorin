// app/providers.tsx
"use client";

import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const colors = {
  gray: {
    300: "var(--gray-300)",
    200: "var(--gray-200)",
    100: "var(--gray-100)",
  },
  white: {
    100: "var(--white-100)",
  },
  primary: {
    100: "var(--primary-100)",
    200: "var(--primary-200)",
  },
};

const theme = extendTheme({ colors });

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
