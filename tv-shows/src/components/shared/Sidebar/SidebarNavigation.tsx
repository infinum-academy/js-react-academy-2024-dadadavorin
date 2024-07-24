"use client";
import { Button, Flex, Box, Image, Hide } from "@chakra-ui/react";
import NextLink from "next/link";
import { mutate } from "swr";
import { swrKeys } from "../../../fetchers/swrKeys";
import { useRouter } from "next/navigation";
import { useBreakpointValue } from "@chakra-ui/react";

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
            colorScheme={useBreakpointValue({
              base: "purple",
              md: "purpleDark",
            })}
            variant="solid"
            size="sm"
          >
            All shows
          </Button>

          <Button
            as={NextLink}
            href="/top-rated"
            colorScheme={useBreakpointValue({
              base: "purple",
              md: "purpleDark",
            })}
            variant="solid"
            size="sm"
          >
            Top rated
          </Button>

          <Button
            colorScheme={useBreakpointValue({
              base: "purple",
              md: "purpleDark",
            })}
            size="sm"
            variant="solid"
          >
            My profile
          </Button>
        </Flex>

        <Button
          colorScheme={useBreakpointValue({ base: "purple", md: "purpleDark" })}
          variant="solid"
          size="sm"
          onClick={handleLogout}
        >
          Log out
        </Button>
      </Flex>
    </Box>
  );
};
