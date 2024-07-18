import { render, screen, fireEvent } from "@testing-library/react";
import { ReviewItem } from "./ReviewItem";
import { deleteReview } from "@/fetchers/mutators";
import { useSWRConfig } from "swr";
import { IReview } from "@/typings/Review.type";

jest.mock("@/fetchers/mutators", () => ({
  deleteReview: jest.fn(),
}));

jest.mock("swr", () => ({
  useSWRConfig: jest.fn(() => ({
    mutate: jest.fn(),
  })),
}));

describe("ReviewItem", () => {
  const mockReview: IReview = {
    id: "1",
    comment: "Great show!",
    rating: 5,
    user: { email: "user1@example.com" },
  };

  it("should call deleteReview and mutate functions on delete button click", () => {
    const { mutate } = useSWRConfig();

    render(<ReviewItem review={mockReview} />);

    const deleteButton = screen.getBy("i");

    fireEvent.click(deleteButton);

    expect(deleteReview).toHaveBeenCalledWith("reviewItem/1");
    expect(mutate).toHaveBeenCalledWith("reviewList/test-id");
  });

  it("should render the review details correctly", () => {
    render(<ReviewItem review={mockReview} />);

    expect(screen.getByText(mockReview.user?.email)).toBeInTheDocument();
    expect(screen.getByText(mockReview.comment)).toBeInTheDocument();
    expect(screen.getByText(mockReview.rating.toString())).toBeInTheDocument();
  });
});
