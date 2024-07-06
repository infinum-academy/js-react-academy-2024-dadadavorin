import { Text, Card, CardBody } from "@chakra-ui/react";
import { IReview } from "@/typings/Review.type";

interface IReviewItemProps {
  review: IReview;
}

export const ReviewItem = ({ review }: IReviewItemProps) => {
  return (
    <Card flexGrow="1" backgroundColor="gray.300" color="white.100">
      <CardBody>
        <Text fontWeight="bold">{review.title}</Text>
        <Text marginBlock="5">{review.comment}</Text>
        <Text>{review.rating}</Text>
      </CardBody>
    </Card>
  );
};
