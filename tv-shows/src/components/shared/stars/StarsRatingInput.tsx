import { Flex } from "@chakra-ui/react";
import { StarIcon } from "./StarIcon";
import { StarInput } from "./StarInput";

export const StarsRatingInput = () => {
  return (
    <Flex className="stars-rating">
      <input
        defaultChecked
        className="rating-input rating-input--none"
        name="rating"
        id="rating-none"
        value="0"
        type="radio"
      />
      <StarInput id="1" />
      <StarInput id="2" />
      <StarInput id="3" />
      <StarInput id="4" />
      <StarInput id="5" />
    </Flex>
  );
};
