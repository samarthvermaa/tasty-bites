import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<Contact />);
  const nameInput = screen.getByPlaceholderText("Name");
  expect(nameInput).toBeInTheDocument();
});

test("should load button", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("should load two input boxes", () => {
  render(<Contact />);
  const button = screen.getAllByRole("textbox");
  expect(button.length).toBe(2);
});
