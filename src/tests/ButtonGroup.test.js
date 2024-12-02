import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonGroup from "../components/ButtonGroup";

describe("ButtonGroup", () => {
  test("renders the ButtonGroup component correctly", () => {
    render(<ButtonGroup />);
    const buttonGroup = screen.getByTestId("button-group");
    expect(buttonGroup).toBeInTheDocument();
    const text = screen.getByTestId("text");
    expect(text).toHaveAttribute("align", "left");

    const leftOption = screen.getByLabelText("left");
    const centerOption = screen.getByLabelText("center");
    const rightOption = screen.getByLabelText("right");

    expect(leftOption).toBeInTheDocument();
    expect(centerOption).toBeInTheDocument();
    expect(rightOption).toBeInTheDocument();
  });
  test("renders correct text when selected left option", () => {
    render(<ButtonGroup />);
    const leftOption = screen.getByLabelText("left");
    userEvent.click(leftOption);
    const text = screen.getByTestId("text");
    expect(text).toHaveAttribute("align", "left");
  });
  test("renders correct text when selected center option", () => {
    render(<ButtonGroup />);
    const centerOption = screen.getByLabelText("center");
    userEvent.click(centerOption);
    const text = screen.getByTestId("text");
    expect(text).toHaveAttribute("align", "center");
  });
  test("renders correct text when selected right option", () => {
    render(<ButtonGroup />);
    const rightOption = screen.getByLabelText("right");
    userEvent.click(rightOption);
    const text = screen.getByTestId("text");
    expect(text).toHaveAttribute("align", "right");
  });
});
