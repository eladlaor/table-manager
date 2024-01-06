import { render, screen } from "@testing-library/react";
import TableRow from "./TableRow";
import { Types } from "../../types";

describe("TableRow component", () => {
  it("renders cells based on rowData and visibleColumns", () => {
    const mockRowData = {
      id: "1",
      name: "John Doe",
      age: 30,
      location: "New York",
    };

    const visibleColumns = {
      id: { visible: true, type: Types.String },
      name: { visible: true, type: Types.String },
      age: { visible: true, type: Types.Number },
      location: { visible: false, type: Types.String },
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
