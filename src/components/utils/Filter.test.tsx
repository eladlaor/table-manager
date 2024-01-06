import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "./Filter";
import { TableColumn } from "../../types";

describe("Filter component", () => {
  it("renders checkboxes for each column", () => {
    const mockColumns: TableColumn[] = [
      { id: "name", title: "Name", ordinalNo: 1, type: "string" },
      { id: "age", title: "Age", ordinalNo: 2, type: "number" },
    ];

    const visibleColumns = {
      name: true,
      age: false,
    };

    const mockSetVisibleColumns = jest.fn();

    render(
      <Filter
        columns={mockColumns}
        visibleColumns={visibleColumns}
        setVisibleColumns={mockSetVisibleColumns}
      />
    );

    mockColumns.forEach((column) => {
      expect(screen.getByLabelText(column.title)).toBeInTheDocument();
    });
  });

  it("handles checkbox change", () => {
    const mockColumns: TableColumn[] = [
      { id: "name", title: "Name", ordinalNo: 1, type: "string" },
    ];
    const visibleColumns = { name: true };
    const mockSetVisibleColumns = jest.fn();

    render(
      <Filter
        columns={mockColumns}
        visibleColumns={visibleColumns}
        setVisibleColumns={mockSetVisibleColumns}
      />
    );

    const checkbox = screen.getByLabelText("Name");
    fireEvent.click(checkbox);

    expect(mockSetVisibleColumns).toHaveBeenCalledWith({
      ...visibleColumns,
      name: false,
    });
  });
});
