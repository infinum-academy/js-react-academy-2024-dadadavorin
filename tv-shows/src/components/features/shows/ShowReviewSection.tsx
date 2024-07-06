"use client";
import { Text, Box } from "@chakra-ui/react";
import { Fragment } from "react";
import { IReviewList } from "@/typings/Review.type";
import { ReviewList } from "../review/ReviewList";

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
  return (
    <Box
      bg="gray.200"
      p={4}
      borderRadius="lg"
      maxW="960px"
      width="100%"
      marginBlock="20"
    >
      <ReviewList reviewList={mockReviewList} />
    </Box>
  );
};
