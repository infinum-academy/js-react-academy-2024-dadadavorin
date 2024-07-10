import { Box, Card, CardBody, Text, Image, Flex } from "@chakra-ui/react";
import { StarIcon } from "@/components/shared/stars/StarIcon";
import NextLink from "next/link";

export const ShowCard = () => {
  return (
    <Card as={NextLink} href="/all-shows/1" borderRadius="10" overflow="hidden">
      <Image src="images/interstellar.webp" alt="Show image" />
      <CardBody>
        <Text fontWeight="bold">Interstellar</Text>
        <Flex alignItems="center">
          <StarIcon />
          <Text>5.0</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};
