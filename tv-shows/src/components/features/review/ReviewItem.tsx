import { Text, Card, CardBody } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { IReview } from "@/typings/Review.type";
import { StarReviewIcons } from "@/components/shared/stars/StarReviewIcons";
import { useParams } from "next/navigation";
import { useSWRConfig } from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { deleteReview } from "@/fetchers/mutators";
import useSWRMutation from "swr/mutation";

interface IReviewItemProps {
  review: IReview;
}

export const ReviewItem = ({ review }: IReviewItemProps) => {
  const params = useParams();
  const { mutate } = useSWRConfig();

  const { trigger } = useSWRMutation(
    swrKeys.reviewItem(review.id),
    () => deleteReview(swrKeys.reviewItem(review.id)),
    {
      onSuccess: () => {
        mutate(swrKeys.reviewList(params.id as string));
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const onDelete = () => {
    trigger();
  };

  return (
    <Card
      flexGrow="1"
      backgroundColor="gray.300"
      color="white.100"
      position="relative"
    >
      <CardBody>
        <Text fontWeight="bold">{review.user?.email}</Text>
        <Text marginBlock="5">{review.comment}</Text>
        <StarReviewIcons reviewRating={review.rating} />
        <CloseIcon
          as="button"
          onClick={onDelete}
          data-testid="delete-review"
          color="white.100"
          position="absolute"
          right="5"
          top="5"
          cursor="pointer"
          padding="2"
          borderRadius="lg"
          width="2em"
          height="2em"
          backgroundColor="gray.200"
          transition="0.1s background-color ease-in-out"
          _hover={{ backgroundColor: "gray.100" }}
        />
      </CardBody>
    </Card>
  );
};
