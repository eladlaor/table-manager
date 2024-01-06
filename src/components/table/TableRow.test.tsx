import { render, screen } from "@testing-library/react";
import TableRow from "./TableRow";

describe("TableRow component", () => {
  it("renders cells based on rowData and visibleColumns", () => {
    const mockRowData = {
      id: "1",
      name: "John Doe",
      age: 30,
      location: "New York",
    };

    const visibleColumns = {
      name: true,
      age: true,
      location: false,
    };

    const mockOnUpdateData = jest.fn();

    render(
      <TableRow
        rowData={mockRowData}
        visibleColumns={visibleColumns}
        onUpdateData={mockOnUpdateData}
        style={{}}
      />
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.queryByText("New York")).not.toBeInTheDocument();
  });
});
