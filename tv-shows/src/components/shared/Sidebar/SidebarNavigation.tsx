import { Button, Flex, Box } from "@chakra-ui/react";
import NextLink from "next/link";

export const SidebarNavigation = () => {
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

        <Button colorScheme="yellow">Log out</Button>
      </Flex>
    </Box>
  );
};
