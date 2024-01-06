import { render } from "@testing-library/react";
import Table from "./Table";
import mockData from "../../dev/mockData";
import { VisibleColumns } from "../../types";

describe("Table component", () => {
  it("renders without crashing", () => {
    const visibleColumns: VisibleColumns = mockData.columns.reduce(
      (acc, column) => {
        acc[column.id] = true;
        return acc;
      },
      {} as VisibleColumns
    );

    render(
      <Table
        data={mockData.data}
        columns={mockData.columns}
        visibleColumns={visibleColumns}
        onUpdateData={jest.fn()}
      />
    );
  });
});
