import {
  Button,
  Flex,
  Box,
  Image,
  Hide,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { mutate } from "swr";
import { swrKeys } from "../../../fetchers/swrKeys";
import { Picker } from "@/components/picker/Picker/Picker";

export const SidebarLinks = () => {
  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("access-token");
    localStorage.removeItem("client");
    localStorage.removeItem("uid");
    localStorage.removeItem("expiry");
    mutate(swrKeys.me, null, { revalidate: false });
  };

  return (
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
        <Picker />
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
  );
};
