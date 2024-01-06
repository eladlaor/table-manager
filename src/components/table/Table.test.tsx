import { render } from "@testing-library/react";
import Table from "./Table";
import mockData from "../../dev/mockData";
import { ColumnInfo, VisibleColumns } from "../../types";

describe("Table component", () => {
  it("renders without crashing", () => {
    const visibleColumns: VisibleColumns = mockData.columns.reduce(
      (acc, column) => {
        const columnInfo = acc[column.id] || ({} as ColumnInfo);
        columnInfo.visible = true;
        acc[column.id] = columnInfo;
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
