import { FixedSizeList as List } from "react-window";
import { TableProps } from "../../types";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import React from "react";
import config from "../../config";

export default function Table({
  columns,
  visibleColumns,
  data,
  onUpdateData,
}: TableProps) {
  const rowHeight = config.listStyle.rowHeight;
  const listHeight = Math.min(
    data.length * rowHeight,
    config.listStyle.maxListHeight
  );

  const RowRenderer = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => (
    <TableRow
      style={style}
      rowData={data[index]}
      visibleColumns={visibleColumns}
      onUpdateData={onUpdateData}
    />
  );

  return (
    <div className="virtualized-table-container">
      <TableHeader columns={columns} />
      <List
        height={listHeight}
        itemCount={data.length}
        itemSize={rowHeight}
        width={"100%"}
      >
        {RowRenderer}
      </List>
    </div>
  );
}
