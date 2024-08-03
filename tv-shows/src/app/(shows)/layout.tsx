import { Sidebar } from "@/components/shared/Sidebar/Sidebar";
import { Flex, Grid } from "@chakra-ui/react";

export default function ShowsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "1fr 3fr",
      }}
      bg="purple.500"
    >
      <Sidebar />
      {children}
    </Grid>
  );
}
