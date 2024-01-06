import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";
import { TableColumn, Types, VisibleColumns } from "../../types";

describe("TableHeader component", () => {
  it("renders all columns", () => {
    const mockColumns: TableColumn[] = [
      { id: "1", title: "Name", type: Types.String, ordinalNo: 1 },
      { id: "2", title: "Age", type: Types.Number, ordinalNo: 2 },
    ];

    const mockVisibleColumns: VisibleColumns = {
      "1": { visible: true, type: Types.String },
      "2": { visible: true, type: Types.Number },
    };

    render(
      <TableHeader
        columns={mockColumns}
        visibleColumns={mockVisibleColumns}
      />
    );

    mockColumns.forEach((column) => {
      expect(screen.getByText(column.title)).toBeInTheDocument();
    });
  });
});
