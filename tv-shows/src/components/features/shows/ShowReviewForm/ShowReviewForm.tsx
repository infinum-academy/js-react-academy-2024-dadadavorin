import {
  Button,
  Flex,
  Input,
  Heading,
  Textarea,
  chakra,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IReview } from "@/typings/Review.type";
import { StarsRatingInput } from "@/components/shared/stars/StarsRatingInput";

interface IReviewFormInputs {
  title: string;
  comment: string;
  rating: number;
}

interface IReviewFormProps {
  onAdd: (review: IReview) => Promise<void>;
}

export const ShowReviewForm = ({ onAdd }: IReviewFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IReviewFormInputs>();

  const onSubmit = async (data: IReviewFormInputs) => {
    try {
      await onAdd({
        title: data.title,
        comment: data.comment,
        rating: data.rating,
      });
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to submit review. Please try again.");
    }
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

      <FormControl isInvalid={!!errors.title}>
        <FormLabel htmlFor="title-input">Title</FormLabel>
        <Input
          id="title-input"
          placeholder="Enter review title"
          variant="flushed"
          backgroundColor="gray.100"
          paddingInline="4"
          {...register("title", { required: "Title is required" })}
        />
        <FormErrorMessage>
          {errors.title && errors.title.message}
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
        isLoading={isSubmitting}
      >
        Add review
      </Button>
    </Flex>
  );
};