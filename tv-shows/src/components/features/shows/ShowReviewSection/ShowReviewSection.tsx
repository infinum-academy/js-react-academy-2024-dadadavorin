"use client";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { IReviewList, IReview } from "@/typings/Review.type";
import { ReviewList } from "../../review/ReviewList";
import { ShowReviewForm } from "../ShowReviewForm/ShowReviewForm";
import { ShowDetailsContainer } from "../ShowDetails/ShowDetailsContainer";

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

export const ShowReviewSection = () => {
  const [reviewList, setReviewList] = useState(mockReviewList);
  const [averageRating, setAverageRating] = useState<number>(0);

  const calculateAverageRating = (reviews: IReview[]) => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / reviews.length;
  };

  const addShowReview = (review: IReview) => {
    const newReviewList = {
      reviews: [...reviewList.reviews, review],
    };
    setReviewList(newReviewList);
    setAverageRating(calculateAverageRating(newReviewList.reviews));
  };

  const onDeleteReview = (review: IReview) => {
    const newReviewList = {
      reviews: reviewList.reviews.filter((r) => r !== review),
    };
    setReviewList(newReviewList);
    setAverageRating(calculateAverageRating(newReviewList.reviews));
  };

  useEffect(() => {
    setAverageRating(calculateAverageRating(reviewList.reviews));
  }, []);

  return (
    <Box bg="gray.200" p={4}>
      <ShowDetailsContainer averageRating={averageRating} />
      <ShowReviewForm onAdd={addShowReview} />
      <ReviewList reviewList={reviewList} onDeleteReview={onDeleteReview} />
    </Box>
  );
};
