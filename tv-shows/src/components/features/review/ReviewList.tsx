import { Flex } from "@chakra-ui/react";
import { IReviewList } from "@/typings/Review.type";
import { ReviewItem } from "./ReviewItem";

interface IReviewListProps {
  reviewList: IReviewList;
}

export const ReviewList = ({ reviewList }: IReviewListProps) => {
  return (
    <Flex direction="column" gap="4">
      {reviewList.reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </Flex>
  );
};
