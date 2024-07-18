import { render, screen } from "@testing-library/react";
import { ReviewList } from "./ReviewList";
import { ReviewItem } from "./ReviewItem";
import { IReviewList } from "@/typings/Review.type";

jest.mock("./ReviewItem", () => ({
  ReviewItem: jest.fn(({ review }) => (
    <div data-testid="mock-review-item">
      <p>{review.comment}</p>
    </div>
  )),
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

    const reviewItems = screen.getAllByTestId("mock-review-item");
    expect(reviewItems).toHaveLength(mockReviewList.reviews.length);

    mockReviewList.reviews.forEach((review, index) => {
      expect(ReviewItem).toHaveBeenNthCalledWith(index + 1, { review }, {});
    });
  });

  it("should render the correct number of ReviewItem components", () => {
    render(<ReviewList reviewList={mockReviewList} />);

    const reviewItems = screen.getAllByTestId("mock-review-item");
    expect(reviewItems).toHaveLength(2);
  });

  it("should display the correct review comments", () => {
    render(<ReviewList reviewList={mockReviewList} />);

    mockReviewList.reviews.forEach((review) => {
      expect(screen.getByText(review.comment)).toBeInTheDocument();
    });
  });
});
