import { Text, Card, CardBody } from "@chakra-ui/react";
import { IReview } from "@/typings/Review.type";
import { StarReviewIcons } from "@/components/shared/stars/StarReviewIcons";

interface IReviewItemProps {
  review: IReview;
}

export const ReviewItem = ({ review }: IReviewItemProps) => {
  return (
    <Card flexGrow="1" backgroundColor="gray.300" color="white.100">
      <CardBody>
        <Text fontWeight="bold">{review.title}</Text>
        <Text marginBlock="5">{review.comment}</Text>
        <StarReviewIcons reviewRating={review.rating} />
      </CardBody>
    </Card>
  );
};
