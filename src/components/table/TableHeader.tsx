import { TableHeaderProps } from "../../types";

export default function TableHeader({
  columns,
  visibleColumns,
}: TableHeaderProps) {
  return (
    <div className="virtualized-table-header">
      {columns
        .filter((column) => visibleColumns[column.id].visible)
        .map((column) => (
          <div
            key={column.id}
            className="virtualized-table-header-cell"
          >
            <div className={`column-header ${column.id}`}>{column.title}</div>
          </div>
        ))}
    </div>
  );
}
