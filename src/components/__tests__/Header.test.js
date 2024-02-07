import Header from "../Header";
import { StoreProvider } from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render header properly", () => {
  render(
    <BrowserRouter>
      <StoreProvider>
        <Header />
      </StoreProvider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button", { name: "Login" });
  expect(loginBtn).toBeInTheDocument();
});

it("should render cart", () => {
  render(
    <BrowserRouter>
      <StoreProvider>
        <Header />
      </StoreProvider>
    </BrowserRouter>
  );
  const cart = screen.getByText(/Cart/);
  expect(cart).toBeInTheDocument();
});

it("should render login button and change to logout on click", () => {
  render(
    <BrowserRouter>
      <StoreProvider>
        <Header />
      </StoreProvider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn);
  const logoutBtn = screen.getByRole("button", { name: "Log Out" });
  expect(logoutBtn).toBeInTheDocument();
});
