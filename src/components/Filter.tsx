import { FilterProps } from "../types";

export default function Filter({
  columns,
  visibleColumns,
  setVisibleColumns,
}: FilterProps) {
  function handleChange(id: string) {
    setVisibleColumns({
      ...visibleColumns,
      [id]: !visibleColumns[id],
    });
  }

  return (
    <div className="filter-container">
      {columns.map((column) => (
        <div key={column.id}>
          <input
            id={`checkbox-${column.id}`}
            className="filter-checkbox"
            type="checkbox"
            checked={visibleColumns[column.id]}
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
