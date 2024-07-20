import { Card, CardBody, Text, Image, Flex } from "@chakra-ui/react";
import { StarIcon } from "@/components/shared/stars/StarIcon";
import NextLink from "next/link";
import { IShow } from "@/typings/Show.type";

export interface IShowCardProps {
  show: IShow;
}

export const ShowCard = ({ show }: IShowCardProps) => {
  return (
    <Card as={NextLink} href={`/all-shows/${show.id}`}>
      <Image src={show.image_url} alt="Show image" />
      <CardBody>
        <Text fontWeight="bold" fontSize="xl">
          {show.title}
        </Text>
        <Flex alignItems="center">
          <StarIcon size="sm" />
          <Text>
            {show.average_rating
              ? `${show.average_rating.toFixed(1)}/5`
              : "No rating"}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};
