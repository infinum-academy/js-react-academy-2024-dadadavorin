"use client";
import { Box, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { IReviewList, IReview } from "@/typings/Review.type";
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
    <Box bg="gray.200" p={4}>
      <ShowDetailsContainer />
      <ShowReviewForm />
      <ReviewList reviewList={reviewList} />
    </Box>
  );
};
