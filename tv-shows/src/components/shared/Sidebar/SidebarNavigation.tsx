"use client";
import { Button, Flex, Box, Image, Hide } from "@chakra-ui/react";
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
    <Box
      px={{ base: "2", md: "6" }}
      py="8"
      position="sticky"
      top="0"
      height={{ base: "100%", md: "80vh" }}
    >
      <Hide below="md">
        <Image
          src="images/logo.svg"
          alt="logo"
          width="200px"
          maxW="100%"
          marginBottom="20"
        />
      </Hide>
      <Flex direction="column" height="100%" justifyContent="space-between">
        <Flex direction="column" gap="4">
          <Button
            as={NextLink}
            href="/all-shows"
            variant={{ base: "purple", md: "purpleDark" }}
            size="sm"
          >
            All shows
          </Button>

          <Button
            as={NextLink}
            href="/top-rated"
            variant={{ base: "purple", md: "purpleDark" }}
            size="sm"
          >
            Top rated
          </Button>

          <Button variant={{ base: "purple", md: "purpleDark" }} size="sm">
            My profile
          </Button>
        </Flex>

        <Button
          variant={{ base: "purple", md: "purpleDark" }}
          size="sm"
          onClick={handleLogout}
        >
          Log out
        </Button>
      </Flex>
    </Box>
  );
};
