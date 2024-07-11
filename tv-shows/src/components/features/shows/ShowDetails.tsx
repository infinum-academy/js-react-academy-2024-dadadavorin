"use client";
import styles from "./show-details.module.css";
import { IShow } from "@/typings/Show.type";
import { Card, CardBody, Image, Heading, Text, Box } from "@chakra-ui/react";
import { getShowItem } from "@/fetchers/shows";
import useSWR from "swr";

export const ShowsItem = () => {
  const {
    data: showItemResponse,
    error,
    isLoading,
  } = useSWR(apiRoute, getShowList);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ups something went wrong...</div>;
  }

  const showLists = showListResponse?.shows;

const showDetails: IShow = {
  id: "1",
  title: "Interstellar",
  description:
    "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  image_url: "/images/interstellar.webp",
  no_of_reviews: 1,
};

export const ShowDetailsContainer = ({ average_rating }: IShow) => {
  return (
    <>
      <Card backgroundColor="gray.200">
        <CardBody>
          <Image
            src={
              showDetails.image_url ??
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
          <Box
            color="white.100"
            marginBlockEnd="5"
            textAlign="right"
            fontSize="large"
          >
            {average_rating ? (
              <div>
                <span>Rating: </span>
                <span className={styles.showRatingValue}>
                  {average_rating.toFixed(1)}
                </span>
                <span> / 5</span>
              </div>
            ) : (
              "No rating"
            )}
          </Box>
        </CardBody>
      </Card>
    </>
  );
};
