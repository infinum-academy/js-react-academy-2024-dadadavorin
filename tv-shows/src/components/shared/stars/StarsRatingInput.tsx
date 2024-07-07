import { Flex } from "@chakra-ui/react";
import styles from "./stars.module.css";

export const StarsRatingInput = () => {
  return (
    <Flex className="stars-rating">
      <input
        disabled
        checked
        className="rating-input rating-input--none"
        name="rating"
        id="rating-none"
        value="0"
        type="radio"
      />
      <label aria-label="1 star" className="rating-label" htmlFor="rating-1">
        <i className="rating-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 24 24"
          >
            <path
              fill="var(--current-color)"
              d="m9.362 9.158-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19a.496.496 0 0 0 .734.534c1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029a.5.5 0 0 0 .195-.505l-1.071-5.191 3.919-3.566a.499.499 0 0 0-.28-.865c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83a.499.499 0 0 0-.909 0l-2.183 4.83z"
            />
          </svg>
        </i>
      </label>
      <input
        className="rating-input"
        name="rating"
        id="rating-1"
        value="1"
        type="radio"
      />
      <label aria-label="2 stars" className="rating-label" htmlFor="rating-2">
        <i className="rating-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 24 24"
          >
            <path
              fill="var(--current-color)"
              d="m9.362 9.158-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19a.496.496 0 0 0 .734.534c1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029a.5.5 0 0 0 .195-.505l-1.071-5.191 3.919-3.566a.499.499 0 0 0-.28-.865c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83a.499.499 0 0 0-.909 0l-2.183 4.83z"
            />
          </svg>
        </i>
      </label>
      <input
        className="rating-input"
        name="rating"
        id="rating-2"
        value="2"
        type="radio"
      />
      <label aria-label="3 stars" className="rating-label" htmlFor="rating-3">
        <i className="rating-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 24 24"
          >
            <path
              fill="var(--current-color)"
              d="m9.362 9.158-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19a.496.496 0 0 0 .734.534c1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029a.5.5 0 0 0 .195-.505l-1.071-5.191 3.919-3.566a.499.499 0 0 0-.28-.865c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83a.499.499 0 0 0-.909 0l-2.183 4.83z"
            />
          </svg>
        </i>
      </label>
      <input
        className="rating-input"
        name="rating"
        id="rating-3"
        value="3"
        type="radio"
      />
      <label aria-label="4 stars" className="rating-label" htmlFor="rating-4">
        <i className="rating-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 24 24"
          >
            <path
              fill="var(--current-color)"
              d="m9.362 9.158-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19a.496.496 0 0 0 .734.534c1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029a.5.5 0 0 0 .195-.505l-1.071-5.191 3.919-3.566a.499.499 0 0 0-.28-.865c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83a.499.499 0 0 0-.909 0l-2.183 4.83z"
            />
          </svg>
        </i>
      </label>
      <input
        className="rating-input"
        name="rating"
        id="rating-4"
        value="4"
        type="radio"
      />
      <label aria-label="5 stars" className="rating-label" htmlFor="rating-5">
        <i className="rating-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 24 24"
          >
            <path
              fill="var(--current-color)"
              d="m9.362 9.158-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19a.496.496 0 0 0 .734.534c1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029a.5.5 0 0 0 .195-.505l-1.071-5.191 3.919-3.566a.499.499 0 0 0-.28-.865c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83a.499.499 0 0 0-.909 0l-2.183 4.83z"
            />
          </svg>
        </i>
      </label>
      <input
        className="rating-input"
        name="rating"
        id="rating-5"
        value="5"
        type="radio"
      />
    </Flex>
  );
};
