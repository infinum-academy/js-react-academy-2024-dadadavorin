"use client";
import { Box, Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import { IReviewList } from "@/typings/Review.type";
import { ReviewList } from "../../review/ReviewList";
import { ShowReviewForm } from "../ShowReviewForm/ShowReviewForm";
import { ShowDetailsContainer } from "../ShowDetails/ShowDetailsContainer";
import useSWR from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { useParams } from "next/navigation";

export const ShowReviewSection = () => {
  const params = useParams();

  const {
    data: reviewListResponse,
    error,
    isLoading,
  } = useSWR<IReviewList>(swrKeys.reviewList(params.id as string), fetcher);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Ups something went wrong...</div>;
  }

  const reviewList: IReviewList = {
    reviews: reviewListResponse?.reviews ?? [],
  };

  return (
    <Box p={4}>
      <ShowDetailsContainer />
      <Grid
        columnGap="4"
        templateColumns={{ base: "1fr", md: "2fr 9fr" }}
        gridTemplateRows="1fr"
        marginTop="24"
      >
        <Text
          color="white"
          fontSize="2xl"
          gridColumn={{ md: "1 / 2" }}
          marginBottom={{ base: "6", md: "0" }}
        >
          Reviews
        </Text>
        <ShowReviewForm />
        <ReviewList reviewList={reviewList} />
      </Grid>
    </Box>
  );
};
