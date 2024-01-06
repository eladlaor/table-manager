import { render, screen, fireEvent } from "@testing-library/react";
import TableCell from "./TableCell";

describe("TableCell component", () => {
  it("renders value as text", () => {
    render(
      <TableCell
        value="Test Value"
        onUpdate={jest.fn()}
        columnId={""}
      />
    );
    expect(screen.getByText("Test Value")).toBeInTheDocument();
  });

  it("turns into an input field on double click", () => {
    const mockOnUpdate = jest.fn();
    render(
      <TableCell
        value="Test Value"
        onUpdate={mockOnUpdate}
        columnId={""}
      />
    );
    fireEvent.doubleClick(screen.getByText("Test Value"));
    expect(screen.getByDisplayValue("Test Value")).toBeInTheDocument();
  });

  it("calls onUpdate with new value on blur", () => {
    const mockOnUpdate = jest.fn();
    render(
      <TableCell
        value="Test Value"
        onUpdate={mockOnUpdate}
        columnId={""}
      />
    );
    fireEvent.doubleClick(screen.getByText("Test Value"));
    const input = screen.getByDisplayValue("Test Value");
    fireEvent.change(input, { target: { value: "New Value" } });
    fireEvent.blur(input);
    expect(mockOnUpdate).toHaveBeenCalledWith("New Value");
  });
});
