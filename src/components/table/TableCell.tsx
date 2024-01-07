import React, { useState } from "react";
import { TableCellProps, Types } from "../../types";

const YesIcon = () => <span>✔️</span>;
const NoIcon = () => <span>❌</span>;

export default function TableCell({
  value,
  onUpdate,
  columnId,
  type,
}: TableCellProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleDoubleClick = () => {
    if (type === Types.Boolean) {
      onUpdate(!value);
    } else {
      setIsEditing(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (type !== Types.Boolean) {
      onUpdate(inputValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      onUpdate(inputValue);
    }
  };

  const renderEditableContent = () => {
    return (
      <input
        type={type === Types.Number ? Types.Number : "text"}
        value={inputValue.toString()}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    );
  };

  const renderContent = () => {
    if (type === Types.Boolean) {
      return value ? <YesIcon /> : <NoIcon />;
    } else {
      return isEditing ? renderEditableContent() : value.toString();
    }
  };

  return (
    <div
      className={`virtualized-table-cell ${columnId}`}
      onDoubleClick={handleDoubleClick}
    >
      <div className={`table-cell-content ${columnId}`}>{renderContent()}</div>
    </div>
  );
}
