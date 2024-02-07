import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../__tests__/mocks/resListMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

// jest.mock("../../utils/useRestaurants", () => ({
//   __esModule: true,
//   default: () => [MOCK_DATA, MOCK_DATA, jest.fn(() => MOCK_DATA[0])],
// }));

// useRestaurants = jest.fn(() => {
//   return [MOCK_DATA, MOCK_DATA, jest.fn];
// });

it(" should render body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const resetBtn = screen.getByRole("button", { name: "Reset" });
  expect(resetBtn).toBeInTheDocument();
});

it(" should render body and change event in input filter the res list", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const input = screen.getByTestId("searchInput");
  // waitFor(() => {
  //   fireEvent.change(input, {
  //     target: { value: "p" },
  //   });
  // });
  const resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(9);
});

it(" top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const btn = screen.getByRole("button", { name: /Filter Top/ });

  fireEvent.change(btn);

  const resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(4);
});
