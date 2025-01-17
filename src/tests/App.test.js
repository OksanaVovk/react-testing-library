import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App";

describe("App", () => {
  test("renders image when the first tab is selected", () => {
    render(<App />);
    const pictureButton = screen.getByText("Picture");
    expect(pictureButton).toBeInTheDocument();
    if (!pictureButton.classList.contains("active")) {
      userEvent.click(pictureButton);
    }

    //   image is displayed when the first tab is selected
    const imageCard = screen.getByRole("img", { name: /.../i });
    expect(imageCard).toBeInTheDocument();
    expect(imageCard).toHaveAttribute("src", "/images/banner-cat2.png");
    const header = screen.getByRole("heading", { level: 5 });
    expect(header).toHaveTextContent("Whiskers");

    //   ButtonGroup component is not displayed
    const buttonGroup = screen.queryByTestId("button-group");
    expect(buttonGroup).not.toBeInTheDocument();

    //   Calculation component is not displayed
    const calculations = screen.queryByLabelText("first number");
    expect(calculations).not.toBeInTheDocument();
  });

  test("Calculation component is displayed when the second is selected", () => {
    render(<App />);
    const calculationsButton = screen.getByText("Calculations");
    expect(calculationsButton).toBeInTheDocument();
    userEvent.click(calculationsButton);
    //   Calculation component is displayed
    const firstInput = screen.queryByLabelText("first number");
    expect(firstInput).toBeInTheDocument();
    const secondInput = screen.queryByLabelText("second number");
    expect(secondInput).toBeInTheDocument();
    const button = screen.getByRole("button", { name: /operation/i });
    expect(button).toBeInTheDocument();
    //   ButtonGroup component is not displayed
    const buttonGroup = screen.queryByTestId("button-group");
    expect(buttonGroup).not.toBeInTheDocument();
    //   image is not displayed
    expect(screen.queryByRole("img", { name: /.../i })).not.toBeInTheDocument();
    const header = screen.getByRole("heading", { level: 5 });
    expect(header).not.toHaveTextContent("Whiskers");
  });
  test("ButtonGroup component is displayed when the third tab is selected", () => {
    render(<App />);
    const groupButton = screen.getByText("Group");
    expect(groupButton).toBeInTheDocument();
    userEvent.click(groupButton);
    //   ButtonGroup component is displayed
    const buttonGroup = screen.queryByTestId("button-group");
    expect(buttonGroup).toBeInTheDocument();
    //   image is not displayed
    expect(screen.queryByRole("img", { name: /.../i })).not.toBeInTheDocument();
    const header = screen.getByRole("heading", { level: 5 });
    expect(header).not.toHaveTextContent("Whiskers");
    //   Calculation component is not displayed
    const calculations = screen.queryByLabelText("first number");
    expect(calculations).not.toBeInTheDocument();
  });
});
