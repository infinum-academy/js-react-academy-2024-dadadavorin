"use client";
import styles from "./show-details.module.css";
import { IShow } from "@/typings/Show.type";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { getShowItem } from "@/fetchers/shows";
import useSWR from "swr";
import { useParams } from "next/navigation";

export const ShowDetailsContainer = () => {
  const params = useParams();
  const {
    data: showItemResponse,
    error,
    isLoading,
  } = useSWR(params.id, getShowItem);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Ups something went wrong...</div>;
  }

  const showDetails: IShow = {
    id: showItemResponse?.id || "unknown",
    title: showItemResponse?.title || "Movie title not found",
    description: showItemResponse?.description || "Movie description not found",
    image_url: showItemResponse?.image_url,
    no_of_reviews: showItemResponse?.no_of_reviews || 0,
    average_rating: showItemResponse?.average_rating || 0,
  };

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
            {showDetails.average_rating ? (
              <div>
                <span>Rating: </span>
                <span className={styles.showRatingValue}>
                  {showDetails.average_rating.toFixed(1)}
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
