"use client";
import { Box, Image } from "@chakra-ui/react";
import { SidebarLinks } from "./SidebarLinks";

export const SidebarDesktop = () => {
  return (
    <Box px="6" py="8" position="sticky" top="0" height="80vh">
      <Image
        src="images/logo.svg"
        alt="logo"
        width="200px"
        maxW="100%"
        marginBottom="20"
      />
      <SidebarLinks />
    </Box>
  );
};
