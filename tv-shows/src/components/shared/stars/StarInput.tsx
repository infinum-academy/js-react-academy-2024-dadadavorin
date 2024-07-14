import { StarIcon } from "./StarIcon";
import { IStar } from "@/typings/Star.type";

export const StarInput = ({ id }: IStar) => {
  return (
    <>
      <label
        aria-label={`${id}-star`}
        className="rating-label"
        htmlFor={`rating-${id}`}
      >
        <StarIcon />
      </label>
      <input
        className="rating-input"
        name="rating"
        id={`rating-${id}`}
        value={id}
        type="radio"
      />
    </>
  );
};
