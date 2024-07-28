import {
  Button,
  Flex,
  Textarea,
  FormControl,
  FormErrorMessage,
  Grid,
  Text,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { StarsRatingInput } from "@/components/shared/stars/StarsRatingInput";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { createReview } from "@/fetchers/mutators";
import { useParams } from "next/navigation";
import { useSWRConfig } from "swr";

export interface IReviewDataParams {
  comment: string;
  rating: number;
  show_id: number;
}

export const ShowReviewForm = () => {
  const params = useParams();
  const { mutate, cache } = useSWRConfig();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IReviewDataParams>();

  const { trigger } = useSWRMutation(swrKeys.reviews, createReview, {
    onSuccess: async (data) => {
      const reviewsFromCache = cache.get(
        swrKeys.reviewList(params.id as string)
      );
      await mutate(
        swrKeys.reviewList(params.id as string),
        { reviews: [data.review, ...reviewsFromCache?.data.reviews] },
        false
      );
      reset();
    },
  });

  const onSubmit = (data: IReviewDataParams) => {
    data.show_id = Number(params.id);
    trigger(data);
  };

  return (
    <Flex
      as="form"
      gap="9"
      flexDirection="column"
      marginBlockEnd="20"
      onSubmit={handleSubmit(onSubmit)}
      width="100%"
      gridColumn={{ md: "2 / 3" }}
    >
      <FormControl isInvalid={!!errors.comment}>
        <Textarea
          id="comment-input"
          placeholder="Enter review"
          fontSize="xl"
          variant="white"
          {...register("comment", { required: "Comment is required" })}
        />
        <FormErrorMessage>{errors?.comment?.message}</FormErrorMessage>
      </FormControl>
      <Grid
        templateColumns="min-content min-content 1fr min-content"
        templateRows="1fr"
        alignItems="center"
        gap="2.5"
      >
        <Text fontSize="xl" color="white" paddingLeft="10">
          Rating
        </Text>
        <StarsRatingInput register={register} errors={errors} required />
        <Box></Box>
        <Button
          type="submit"
          isLoading={isSubmitting}
          fontSize="sm"
          variant="solid"
          size="md"
        >
          Post
        </Button>
      </Grid>
    </Flex>
  );
};
