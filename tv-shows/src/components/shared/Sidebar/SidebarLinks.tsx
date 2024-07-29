import { Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { mutate } from "swr";
import { swrKeys } from "../../../fetchers/swrKeys";
import { Picker } from "@/components/picker/Picker/Picker";
import { usePathname } from "next/navigation";

export const SidebarLinks = () => {
  const currentPath = usePathname();

  // Function to check if the route is active
  const isActive = (path: string) => currentPath === path;

  // Define color scheme for active and default states
  const defaultColorScheme = useBreakpointValue({
    base: "purple",
    md: "purpleDark",
  });
  const activeColorScheme = useBreakpointValue({
    base: "purpleLight",
    md: "purple",
  });

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
          colorScheme={
            isActive("/all-shows") ? activeColorScheme : defaultColorScheme
          }
          variant="solid"
          size="sm"
        >
          All shows
        </Button>

        <Button
          as={NextLink}
          href="/top-rated"
          colorScheme={
            isActive("/top-rated") ? activeColorScheme : defaultColorScheme
          }
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
