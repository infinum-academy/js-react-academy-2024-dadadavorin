"use client";
import { Button, Flex, Box } from "@chakra-ui/react";
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
    <Box bg="gray.300" position="relative">
      <Flex
        direction="column"
        p={4}
        paddingBlock="10"
        gap="2"
        position="sticky"
        top="0"
      >
        <Button as={NextLink} href="/all-shows" colorScheme="yellow">
          All shows
        </Button>

        <Button as={NextLink} href="/top-rated" colorScheme="yellow">
          Top rated
        </Button>

        <Button colorScheme="yellow" marginBottom="5">
          My profile
        </Button>

        <Button colorScheme="yellow" onClick={handleLogout}>
          Log out
        </Button>
      </Flex>
    </Box>
  );
};
