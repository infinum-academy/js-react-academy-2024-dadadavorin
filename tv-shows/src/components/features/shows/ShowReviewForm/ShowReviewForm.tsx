import {
  Button,
  Flex,
  Input,
  Heading,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { StarsRatingInput } from "@/components/shared/stars/StarsRatingInput";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { createReview } from "@/fetchers/mutators";
import { useParams } from "next/navigation";
import { useSWRConfig } from "swr";
import { useState } from "react";

export interface IReviewDataParams {
  comment: string;
  rating: number;
  show_id: number;
}

export const ShowReviewForm = () => {
  const params = useParams();
  const { mutate } = useSWRConfig();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewDataParams>();

  const { trigger } = useSWRMutation(swrKeys.reviews, createReview, {
    onSuccess: async (data) => {
      await mutate(swrKeys.reviewList(params.id as string), data, false);
      reset();
      setLoading(false);
    },
  });

  const onSubmit = (data: IReviewDataParams) => {
    setLoading(true);
    data.show_id = Number(params.id);
    trigger(data);
  };

  return (
    <Flex
      as="form"
      gap="8"
      flexDirection="column"
      marginBlockEnd="20"
      backgroundColor="gray.300"
      color="white.100"
      borderRadius="lg"
      padding="8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading as="h3" size="lg">
        Add your review
      </Heading>

      <FormControl isInvalid={!!errors.comment}>
        <FormLabel htmlFor="comment-input">Comment</FormLabel>
        <Textarea
          id="comment-input"
          variant="flushed"
          placeholder="Enter review comment"
          backgroundColor="gray.100"
          paddingInline="4"
          {...register("comment", { required: "Comment is required" })}
        />
        <FormErrorMessage>
          {errors.comment && errors.comment.message}
        </FormErrorMessage>
      </FormControl>

      <StarsRatingInput register={register} errors={errors} required />

      <Button
        type="submit"
        backgroundColor="primary.100"
        _hover={{ bg: "primary.200" }}
        isLoading={loading}
      >
        Add review
      </Button>
    </Flex>
  );
};
