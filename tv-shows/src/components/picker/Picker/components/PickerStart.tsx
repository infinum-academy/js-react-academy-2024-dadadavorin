import { Flex, Heading, Text } from "@chakra-ui/react";

export const PickerStart = () => {
  return (
    <Flex direction="column" gap="4" alignItems="center" paddingBlock="10">
      <Heading fontSize="2xl">Welcome to TV Show picker!</Heading>
      <Text>Pick 1 of 4 shows on each step.</Text>
      <Text>Click on the show to select it.</Text>
      <Text>Click on the selected show to deselect it.</Text>
      <Text>
        Click <strong>Next</strong> to start!
      </Text>
    </Flex>
  );
};
