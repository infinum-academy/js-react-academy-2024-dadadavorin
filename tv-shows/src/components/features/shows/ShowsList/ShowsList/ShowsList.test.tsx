import { render, screen } from "@testing-library/react";
import { ShowsList } from "./ShowsList";
import { ShowCard } from "../../ShowCard/ShowCard";
import { IShowList } from "@/typings/Show.type";

jest.mock("../../ShowCard/ShowCard", () => ({
  ShowCard: jest.fn(({ show }) => (
    <div data-testid="mock-show-card">
      <img src={show.image_url} alt="Show image" />
      <p>{show.title}</p>
      <p>
        {show.average_rating ? show.average_rating.toFixed(1) : "No rating"}
      </p>
    </div>
  )),
}));

describe("ShowsList", () => {
  const mockShowLists: IShowList = {
    shows: [
      {
        id: "1",
        title: "Show 1",
        description: "Description 1",
        image_url: "http://example.com/image1.jpg",
        average_rating: 4.5,
        no_of_reviews: 10,
      },
      {
        id: "2",
        title: "Show 2",
        description: "Description 2",
        image_url: "http://example.com/image2.jpg",
        average_rating: 3.7,
        no_of_reviews: 5,
      },
    ],
  };

  it("should render ShowCard components with the correct props", () => {
    render(<ShowsList showLists={mockShowLists} />);

    const showCards = screen.getAllByTestId("mock-show-card");
    expect(showCards).toHaveLength(mockShowLists.shows.length);

    mockShowLists.shows.forEach((show, index) => {
      expect(ShowCard).toHaveBeenNthCalledWith(index + 1, { show }, {});
    });
  });
});
