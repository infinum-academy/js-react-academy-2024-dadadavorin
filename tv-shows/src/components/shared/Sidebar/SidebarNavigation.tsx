import { Button, Flex, Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const SidebarNavigation = () => {
  return (
    <Flex
      direction="column"
      p={4}
      bg="gray.300"
      height="100%"
      paddingBlock="10"
      gap="2"
    >
      <Button as={NextLink} href="/all-shows" colorScheme="yellow">
        All shows
      </Button>

      <Button as={NextLink} href="/top-rated" colorScheme="yellow">
        Top rated
      </Button>

      <Button colorScheme="yellow">My profile</Button>

      <Box flexGrow={1}></Box>

      <Button colorScheme="yellow">Log out</Button>
    </Flex>
  );
};
