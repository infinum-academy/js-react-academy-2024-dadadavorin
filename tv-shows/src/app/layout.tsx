import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "@/components/shared/header/Header";
import { Footer } from "@/components/shared/footer/Footer";
import { Grid } from "@chakra-ui/react";
import { SidebarNavigation } from "@/components/shared/Sidebar/SidebarNavigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Providers>
          <Header />
          <Grid
            templateColumns={{
              base: "1fr",
              md: "1fr 3fr",
            }}
          >
            <SidebarNavigation />
            {children}
          </Grid>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
