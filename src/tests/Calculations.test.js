import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculations from "../components/Calculations";

describe("Calculations", () => {
  test("renders result with starting value 0", () => {
    render(<Calculations />);
    const result = screen.getByRole("heading", { level: 4 });
    expect(result).toHaveClass("card-text");
    expect(result).toHaveTextContent(0);
  });
  test("renders first input with starting value 0", () => {
    render(<Calculations />);
    const firstInput = screen.getByLabelText("first number");
    expect(firstInput).toHaveValue(0);
  });
  test("renders second input with starting value 0", () => {
    render(<Calculations />);
    const secondInput = screen.getByLabelText("second number");
    expect(secondInput).toHaveValue(0);
  });
  test("renders operations button with starting value +", () => {
    render(<Calculations />);
    const operationButton = screen.getByLabelText("operation");
    expect(operationButton).toHaveTextContent("+");
  });
  test("renders the correct result for the sum of two numbers", async () => {
    render(<Calculations />);
    const firstInput = screen.getByLabelText("first number");
    userEvent.type(firstInput, "7");
    const secondInput = screen.getByLabelText("second number");
    userEvent.type(secondInput, "8");
    const operationButton = screen.getByLabelText("operation");
    expect(operationButton).toHaveTextContent("+");
    const button = screen.getByRole("button", { name: /evaluate/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    const result = await screen.findByRole("heading", { level: 4 });
    expect(result).toHaveTextContent(15);
  });
  test("renders the correct result for the minus of two numbers", async () => {
    render(<Calculations />);
    const firstInput = screen.getByLabelText("first number");
    userEvent.type(firstInput, "9");
    const secondInput = screen.getByLabelText("second number");
    userEvent.type(secondInput, "2");
    const minusOption = await screen.findByText("-");
    userEvent.click(minusOption);
    const button = screen.getByRole("button", { name: /evaluate/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    const result = await screen.findByRole("heading", { level: 4 });
    expect(result).toHaveTextContent(7);
  });
});
