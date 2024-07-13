import { Box, Card, CardBody, Text, Image, Flex } from "@chakra-ui/react";
import { StarIcon } from "@/components/shared/stars/StarIcon";
import NextLink from "next/link";
import { IShow } from "@/typings/Show.type";

export interface IShowCardProps {
  show: IShow;
}

export const ShowCard = ({ show }: IShowCardProps) => {
  return (
    <Card
      as={NextLink}
      href={`/all-shows/${show.id}`}
      borderRadius="10"
      overflow="hidden"
    >
      <Image src={show.image_url} alt="Show image" />
      <CardBody>
        <Text fontWeight="bold">{show.title}</Text>
        <Flex alignItems="center">
          <StarIcon />
          <Text>
            {show.average_rating ? show.average_rating.toFixed(1) : "No rating"}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};
