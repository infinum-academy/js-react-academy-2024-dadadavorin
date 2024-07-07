import {
  Button,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
} from "@chakra-ui/react";
import { useRef } from "react";
import { IReview } from "@/typings/Review.type";

interface IReviewFormProps {
  onAdd: (review: IReview) => void;
}

export const ShowReviewForm = ({ onAdd }: IReviewFormProps) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLInputElement>(null);
  const ratingInputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    const titleValue = titleInputRef.current?.value || "";
    const commentValue = commentInputRef.current?.value || "";
    const ratingValue = Number(ratingInputRef.current?.value) || 1;

    if (!titleValue || !commentValue || !ratingValue) {
      alert("Please enter your review title, comment and rating.");
      return;
    }

    const newReview: IReview = {
      title: titleValue,
      comment: commentValue,
      rating: ratingValue,
    };

    onAdd(newReview);

    // Clear the form inputs
    if (titleInputRef.current) titleInputRef.current.value = "";
    if (commentInputRef.current) commentInputRef.current.value = "";
  };

  return (
    <Flex
      gap="8"
      direction="column"
      marginBlockEnd="20"
      backgroundColor="gray.300"
      color="white.100"
      borderRadius="lg"
      padding="8"
    >
      <Heading as="h3" size="lg">
        Add your review
      </Heading>

      <Input
        id="title-input"
        ref={titleInputRef}
        placeholder="Enter review title"
        variant="flushed"
        backgroundColor="gray.100"
        paddingInline="4"
      />

      <Input
        id="comment-input"
        ref={commentInputRef}
        variant="flushed"
        placeholder="Enter review comment"
        backgroundColor="gray.100"
        paddingInline="4"
      />

      <NumberInput min={1} max={5} id="rating-input" backgroundColor="gray.100">
        <NumberInputField ref={ratingInputRef} />
        <NumberInputStepper>
          <NumberIncrementStepper color="white.100" />
          <NumberDecrementStepper color="white.100" />
        </NumberInputStepper>
      </NumberInput>

      <Button
        onClick={onClickHandler}
        backgroundColor="primary.100"
        _hover={{ bg: "primary.200" }}
      >
        Add review
      </Button>
    </Flex>
  );
};
