"use client";
import { Text, Box, Show } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { IReviewList, IReview } from "@/typings/Review.type";
import { ReviewList } from "../review/ReviewList";
import { ShowReviewForm } from "./ShowReviewForm";

const mockReviewList: IReviewList = {
  reviews: [
    {
      title: "Review 1 title",
      comment: "Some comment",
      rating: 5,
    },
    {
      title: "Review 2 title",
      comment: "Some 2 comment",
      rating: 4,
    },
    {
      title: "Review 3 title",
      comment: "Some 3 comment",
      rating: 2,
    },
  ],
};

export const ReviewListContainer = () => {
  const [reviewList, setReviewList] = useState(mockReviewList);

  const addShowReview = (review: IReview) => {
    const newReviewList = {
      reviews: [...reviewList.reviews, review],
    };
    setReviewList(newReviewList);
  };

  return (
    <Box
      bg="gray.200"
      p={4}
      borderRadius="lg"
      maxW="960px"
      width="100%"
      marginBlock="20"
    >
      <ShowReviewForm onAdd={addShowReview} />
      <ReviewList reviewList={reviewList} />
    </Box>
  );
};
