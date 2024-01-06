import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";
import { TableColumn } from "../types";

describe("TableHeader component", () => {
  it("renders all columns", () => {
    const mockColumns: TableColumn[] = [
      { id: "1", title: "Name", type: "string", ordinalNo: 1 },
      { id: "2", title: "Age", type: "number", ordinalNo: 2 },
    ];

    render(<TableHeader columns={mockColumns} />);

    mockColumns.forEach((column) => {
      expect(screen.getByText(column.title)).toBeInTheDocument();
    });
  });
});
