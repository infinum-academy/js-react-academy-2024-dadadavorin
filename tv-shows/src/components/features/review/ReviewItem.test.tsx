import { render, screen, fireEvent } from "@testing-library/react";
import { ReviewItem } from "./ReviewItem";
import { deleteReview } from "@/fetchers/mutators";
import { useSWRConfig } from "swr";
import { IReview } from "@/typings/Review.type";
import { useParams } from "next/navigation";
import { swrKeys } from "@/fetchers/swrKeys";

jest.mock("@/fetchers/mutators", () => ({
  deleteReview: jest.fn(),
}));

jest.mock("swr", () => ({
  useSWRConfig: jest.fn(() => ({
    mutate: jest.fn(),
  })),
}));

jest.mock("next/navigation", () => ({
  useParams: jest.fn(),
}));

describe("ReviewItem", () => {
  const mockReview: IReview = {
    id: "1",
    comment: "Great show!",
    rating: 5,
    user: { email: "user1@example.com" },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useParams as jest.Mock).mockReturnValue({ id: "test-id" });
  });

  it("should call deleteReview and mutate functions on delete button click", () => {
    const { mutate } = useSWRConfig();

    render(<ReviewItem review={mockReview} />);

    const deleteButton = screen.getByTestId("delete-review");

    fireEvent.click(deleteButton);

    expect(deleteReview).toHaveBeenCalledWith(
      `${swrKeys.reviewItem(mockReview.id)}`
    );
    expect(mutate).toHaveBeenCalledWith(swrKeys.reviewList("test-id"));
  });
});
