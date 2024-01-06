import TableCell from "./TableCell";
import { TableRowProps } from "../../types";

export default function TableRow({
  rowData,
  visibleColumns,
  onUpdateData,
  style,
}: TableRowProps) {
  return (
    <div
      className="virtualized-table-row"
      style={style}
    >
      {Object.entries(rowData)
        .filter(([columnId]) => visibleColumns[columnId])
        .map(([columnId, cellValue]) => (
          <TableCell
            key={`${rowData.id}-${columnId}`}
            columnId={columnId}
            value={cellValue}
            onUpdate={(newValue) =>
              onUpdateData(rowData.id, columnId, newValue)
            }
          />
        ))}
    </div>
  );
}
