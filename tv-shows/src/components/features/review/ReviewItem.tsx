import { Text, Card, CardBody, Grid, Box } from "@chakra-ui/react";
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
    <Card flexGrow="1" position="relative" variant="review">
      <CardBody>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 2fr" }}
          columnGap="70px"
          rowGap="2"
          templateRows={{ base: "1fr", md: "1fr 1fr" }}
        >
          <Text
            fontWeight="bold"
            gridRow={{ md: "1 / 2" }}
            gridColumn={{ md: "1 / 2" }}
            alignSelf="end"
          >
            {review.user?.email}
          </Text>
          <Box
            gridRow={{ md: "2 / 3" }}
            gridColumn={{ md: "1 / 2" }}
            alignSelf="start"
          >
            <StarReviewIcons reviewRating={review.rating} />
          </Box>
          <Text
            gridRow={{ md: "1 / 3" }}
            gridColumn={{ md: "2 / 3" }}
            alignSelf="start"
          >
            {review.comment}
          </Text>
        </Grid>

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
          backgroundColor="purple.100"
          transition="0.1s background-color ease-in-out"
          _hover={{ backgroundColor: "purple.500" }}
        />
      </CardBody>
    </Card>
  );
};
