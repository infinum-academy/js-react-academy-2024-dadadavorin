"use client";
import { Button, Flex, Box, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import { mutate } from "swr";
import { swrKeys } from "../../../fetchers/swrKeys";
import { useRouter } from "next/navigation";

export const SidebarNavigation = () => {
  const router = useRouter();

  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("access-token");
    localStorage.removeItem("client");
    localStorage.removeItem("uid");
    localStorage.removeItem("expiry");
    mutate(swrKeys.me, null, { revalidate: false });
  };

  return (
    <Box position="relative" px="6" py="8">
      <Image
        src="images/logo.svg"
        alt="logo"
        width="200px"
        maxW="100%"
        marginBottom="20"
      />
      <Flex direction="column" gap="4" position="sticky" top="0">
        <Button as={NextLink} href="/all-shows" variant="purpleDark" size="sm">
          All shows
        </Button>

        <Button as={NextLink} href="/top-rated" variant="purpleDark" size="sm">
          Top rated
        </Button>

        <Button variant="purpleDark" size="sm" marginBottom="5">
          My profile
        </Button>

        <Button variant="purpleDark" size="sm" onClick={handleLogout}>
          Log out
        </Button>
      </Flex>
    </Box>
  );
};
