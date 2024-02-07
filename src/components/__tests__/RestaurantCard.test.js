import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedRestaurantCard } from "../RestaurantCard";
import MOCK_DATA from "./mocks/resDataMock.json";
import "@testing-library/jest-dom";

it("should render res card with props", () => {
  render(<RestaurantCard data={MOCK_DATA} />);
  const name = screen.getByText("Domino's Pizza");
  expect(name).toBeInTheDocument();
});

it("should render res card with props", () => {
  const PromotedResCardComponent = withPromotedRestaurantCard(RestaurantCard);
  render(<PromotedResCardComponent data={MOCK_DATA} />);
  const name = screen.getByText("Promoted");
  expect(name).toBeInTheDocument();
});
