"use client";
import styles from "./show-details.module.css";
import { IShow } from "@/typings/Show.type";
import { Card, CardBody, Image, Heading, Text, Box } from "@chakra-ui/react";

const showDetails: IShow = {
  title: "Interstellar",
  description:
    "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  imageUrl: "/images/interstellar.webp",
  averageRating: 4.7,
};

export const ShowDetailsContainer = () => {
  return (
    <Box maxW="960px">
      <Card backgroundColor="gray.200">
        <CardBody>
          <Image
            src={
              showDetails.imageUrl ??
              "https://fakeimg.pl/1200x800?text=Show+image"
            }
            alt="Show image"
            borderRadius="lg"
            marginBlockEnd="10"
          />
          <Heading color="white.100" marginBlock="5">
            {showDetails.title}
          </Heading>
          <Text color="white.100" marginBlockEnd="5">
            {showDetails.description}
          </Text>
          <Text
            color="white.100"
            marginBlockEnd="5"
            textAlign="right"
            fontSize="large"
          >
            {showDetails.averageRating && (
              <div>
                <span>Rating: </span>
                <span className={styles.showRatingValue}>
                  {showDetails.averageRating}
                </span>
                <span> / 5</span>
              </div>
            )}
            {!showDetails.averageRating && "No rating"}
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
};
