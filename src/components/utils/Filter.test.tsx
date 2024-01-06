import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "./Filter";
import { TableColumn, Types } from "../../types";

describe("Filter component", () => {
  it("renders checkboxes for each column", () => {
    const mockColumns: TableColumn[] = [
      { id: "name", title: "Name", ordinalNo: 1, type: Types.String },
      { id: "age", title: "Age", ordinalNo: 2, type: Types.Number },
    ];

    const visibleColumns = {
      name: { visible: true, type: Types.String },
      age: { visible: true, type: Types.Number },
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
      { id: "name", title: "Name", ordinalNo: 1, type: Types.String },
    ];
    const visibleColumns = { name: { visible: true, type: Types.String } };
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

    expect(mockSetVisibleColumns).toHaveBeenCalledTimes(1);

    const updaterFunction = mockSetVisibleColumns.mock.calls[0][0];

    const prevState = { ...visibleColumns };

    const newState = updaterFunction(prevState);

    const expectedState = {
      ...visibleColumns,
      name: { ...visibleColumns.name, visible: false },
    };

    expect(newState).toEqual(expectedState);
  });
});
