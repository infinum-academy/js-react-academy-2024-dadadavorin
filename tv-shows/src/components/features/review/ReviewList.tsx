import { Flex } from "@chakra-ui/react";
import { IReviewList, IReview } from "@/typings/Review.type";
import { ReviewItem } from "./ReviewItem";

interface IReviewListProps {
  reviewList: IReviewList;
  onDeleteReview: (review: IReview) => void;
}

export const ReviewList = ({
  reviewList,
  onDeleteReview,
}: IReviewListProps) => {
  return (
    <Flex direction="column" gap="4">
      {reviewList.reviews.map((review, index) => (
        <ReviewItem key={index} review={review} onDelete={onDeleteReview} />
      ))}
    </Flex>
  );
};
