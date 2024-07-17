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
import { IReview } from "@/typings/Review.type";
import { StarsRatingInput } from "@/components/shared/stars/StarsRatingInput";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { createReview } from "@/fetchers/mutators";
import { useParams } from "next/navigation";

interface IReviewFormInputs {
  email: string;
  comment: string;
  rating: number;
}

interface IReviewDataParams {
  comment: string;
  rating: number;
  show_id: number;
}

interface IReviewFormProps {
  onAdd: (review: IReview) => Promise<void>;
}

export const ShowReviewForm = ({ onAdd }: IReviewFormProps) => {
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewFormInputs>();

  const { trigger, isMutating } = useSWRMutation(swrKeys.reviews, createReview);

  const onSubmit = async (data: IReviewDataParams) => {
    data.show_id = Number(params.id);
    console.log("adding review");
    console.log(data);
    await trigger(data);
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

      <FormControl isInvalid={!!errors.email}>
        <FormLabel htmlFor="email-input">Email</FormLabel>
        <Input
          id="email-input"
          placeholder="Enter your email"
          variant="flushed"
          backgroundColor="gray.100"
          paddingInline="4"
          {...register("email", { required: "email is required" })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

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
        isLoading={isMutating}
      >
        Add review
      </Button>
    </Flex>
  );
};
