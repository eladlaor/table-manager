import { FilterProps } from "../../types";

export default function Filter({
  columns,
  visibleColumns,
  setVisibleColumns,
}: FilterProps) {
  function handleChange(id: string) {
    setVisibleColumns((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        visible: !prev[id].visible,
      },
    }));
  }

  return (
    <div className="filter-container">
      {columns.map((column) => (
        <div key={column.id}>
          <input
            id={`checkbox-${column.id}`}
            className="filter-checkbox"
            type="checkbox"
            checked={visibleColumns[column.id].visible}
            onChange={() => handleChange(column.id)}
          />
          <label
            htmlFor={`checkbox-${column.id}`}
            className="filter-label"
          >
            {column.title}
          </label>
        </div>
      ))}
    </div>
  );
}
