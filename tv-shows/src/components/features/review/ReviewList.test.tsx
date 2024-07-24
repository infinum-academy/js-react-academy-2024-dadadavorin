import { render, screen } from "@testing-library/react";
import { ReviewList } from "./ReviewList";
import { ReviewItem } from "./ReviewItem";
import { IReviewList } from "@/typings/Review.type";

jest.mock("./ReviewItem", () => ({
  ReviewItem: jest.fn().mockReturnValue(null),
}));

describe("ReviewList", () => {
  const mockReviewList: IReviewList = {
    reviews: [
      {
        id: "1",
        comment: "Great show!",
        rating: 5,
        user: { email: "user1@example.com" },
      },
      {
        id: "2",
        comment: "Not bad",
        rating: 3,
        user: { email: "user2@example.com" },
      },
    ],
  };

  it("should render ReviewItem components with the correct props", () => {
    render(<ReviewList reviewList={mockReviewList} />);
    mockReviewList.reviews.forEach((review, index) => {
      expect(ReviewItem).toHaveBeenNthCalledWith(index + 1, { review }, {});
    });
  });
});
