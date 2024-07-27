// app/providers.tsx
"use client";

import theme from "@/styles/theme/theme";

import { ChakraProvider } from "@chakra-ui/react";
import { PickerContextProvider } from "@/components/picker/Picker/components/PickerContextProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <PickerContextProvider>{children}</PickerContextProvider>
    </ChakraProvider>
  );
}
