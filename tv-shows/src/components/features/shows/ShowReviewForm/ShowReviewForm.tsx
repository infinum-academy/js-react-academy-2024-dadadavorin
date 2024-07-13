import { Button, Flex, Input, Heading, Textarea } from "@chakra-ui/react";
import { useRef } from "react";
import { IReview } from "@/typings/Review.type";
import { StarsRatingInput } from "@/components/shared/stars/StarsRatingInput";

interface IReviewFormProps {
  onAdd: (review: IReview) => void;
}

export const ShowReviewForm = ({ onAdd }: IReviewFormProps) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const onClickHandler = () => {
    const titleValue = titleInputRef.current?.value || "";
    const commentValue = commentInputRef.current?.value || "";

    const ratingElement = document.querySelector(
      'input[name="rating"]:checked'
    ) as HTMLInputElement | null;
    const ratingValue = ratingElement ? parseInt(ratingElement.value, 10) : 0;

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

    // Reset the rating input
    const ratingNoneElement = document.getElementById(
      "rating-none"
    ) as HTMLInputElement;
    if (ratingNoneElement) {
      ratingNoneElement.checked = true;
    }
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

      <Textarea
        id="comment-input"
        ref={commentInputRef}
        variant="flushed"
        placeholder="Enter review comment"
        backgroundColor="gray.100"
        paddingInline="4"
      />

      <StarsRatingInput />

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
