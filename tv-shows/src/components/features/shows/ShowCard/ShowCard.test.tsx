import { ShowCard } from "./ShowCard";
import { render, screen } from "@testing-library/react";

describe("ShowCard", () => {
  const mockShow = {
    id: "1",
    title: "Test Show",
    image_url: "http://example.com/image.jpg",
    average_rating: 4.5,
    description: "Test description",
    no_of_reviews: 10,
  };

  it("should render an image element with the provided url", () => {
    render(<ShowCard show={mockShow} />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockShow.image_url);
    expect(image).toHaveAttribute("alt", "Show image");
  });

  it("should render the show title", () => {
    render(<ShowCard show={mockShow} />);

    expect(screen.getByText(mockShow.title)).toBeInTheDocument();
  });

  it("should render the correct average rating", () => {
    render(<ShowCard show={mockShow} />);

    expect(
      screen.getByText(mockShow.average_rating.toFixed(1))
    ).toBeInTheDocument();
  });

  it('should render "No rating" if no average rating is provided', () => {
    const showWithoutRating = {
      ...mockShow,
      average_rating: null,
    };

    render(<ShowCard show={showWithoutRating} />);

    expect(screen.getByText("No rating")).toBeInTheDocument();
  });
});
