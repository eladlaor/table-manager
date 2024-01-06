import React, { useState } from "react";

import { TableCellProps } from "../types";

export default function TableCell({ value, onUpdate }: TableCellProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value.toString());

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    onUpdate(inputValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleBlur();
    }
  };

  return (
    <div
      className="virtualized-table-cell"
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}
