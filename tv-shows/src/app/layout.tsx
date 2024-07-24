import type { Metadata } from "next";
import { Providers } from "./providers";
import { Box, Grid, Hide } from "@chakra-ui/react";
import { SidebarNavigation } from "@/components/shared/Sidebar/SidebarNavigation";
import { MobileHeader } from "@/components/shared/MobileHeader/MobileHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MobileHeader />
          <Grid
            templateColumns={{
              base: "1fr",
              md: "1fr 3fr",
            }}
            bg="purple.500"
          >
            <Hide below="md">
              <SidebarNavigation />
            </Hide>
            {children}
          </Grid>
        </Providers>
      </body>
    </html>
  );
}
