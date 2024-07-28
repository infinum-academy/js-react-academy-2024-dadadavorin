"use client";
import styles from "./show-details.module.css";
import { IShow, IShowResponse } from "@/typings/Show.type";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Box,
  Spinner,
  Flex,
  Grid,
} from "@chakra-ui/react";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { StarIcon } from "@/components/shared/stars/StarIcon";

export const ShowDetailsContainer = () => {
  const params = useParams();
  const {
    data: showItemResponse,
    error,
    isLoading,
  } = useSWR<IShowResponse>(swrKeys.showItem(params.id as string), fetcher);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Ups something went wrong...</div>;
  }

  const showDetails: IShow = {
    id: showItemResponse?.show?.id || "unknown",
    title: showItemResponse?.show?.title || "Movie title not found",
    description:
      showItemResponse?.show?.description || "Movie description not found",
    image_url: showItemResponse?.show?.image_url,
    no_of_reviews: showItemResponse?.show?.no_of_reviews || 0,
    average_rating: showItemResponse?.show?.average_rating || 0,
  };

  return (
    <>
      <Card size="xl">
        <Image
          src={
            showDetails.image_url ??
            "https://fakeimg.pl/1200x800?text=Show+image"
          }
          alt="Show image"
        />
        <CardBody>
          <Grid
            templateColumns="1fr 1fr"
            templateRows="1fr 1fr"
            alignItems="center"
          >
            <Heading
              fontSize="4xl"
              gridColumn="1 / 2"
              gridRow="1 / 2"
              alignSelf="end"
            >
              {showDetails.title}
            </Heading>
            <Flex
              gridColumn="1 / 2"
              gridRow="2 / 3"
              alignSelf="start"
              alignItems="center"
              gap="2"
            >
              <StarIcon size="md" />
              <Text fontSize="2xl">
                {showDetails.average_rating
                  ? `${showDetails.average_rating.toFixed(1)}/5`
                  : "No rating"}
              </Text>
            </Flex>
            <Text gridColumn="2 / 3" gridRow="1 / 3" fontSize="xl">
              {showDetails.description}
            </Text>
          </Grid>
        </CardBody>
      </Card>
    </>
  );
};
