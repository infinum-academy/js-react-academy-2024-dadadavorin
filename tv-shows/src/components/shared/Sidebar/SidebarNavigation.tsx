import { Button, Flex, Box, Link } from "@chakra-ui/react";

export const SidebarNavigation = () => {
  return (
    <Flex
      direction="column"
      p={4}
      bg="gray.300"
      height="100%"
      paddingBlock="10"
    >
      <Link href="/all-shows">
        <Button colorScheme="yellow" mb={2} width="100%">
          All Shows
        </Button>
      </Link>
      <Button colorScheme="yellow" mb={2} width="100%">
        Top rated
      </Button>
      <Button colorScheme="yellow" mb={2} width="100%">
        My profile
      </Button>
      <Box flexGrow={1}></Box>{" "}
      {/* Spacer that pushes the next element to the end */}
      <Button colorScheme="yellow" mb={2} width="100%">
        Log out
      </Button>
    </Flex>
  );
};
