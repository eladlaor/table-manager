export interface TableColumn {
  id: string;
  ordinalNo: number;
  title: string;
  type: string;
  width?: number;
}

export interface TableHeaderProps {
  columns: TableColumn[];
  visibleColumns: VisibleColumns;
}

export interface TableRowData {
  id: string;
  [columnId: string]: any;
}

export interface TableProps {
  columns: TableColumn[];
  visibleColumns: VisibleColumns;
  data: TableRowData[];
  onUpdateData: (rowId: string, columnId: string, newValue: any) => void;
}

export interface TableRowProps {
  rowData: TableRowData;
  visibleColumns: VisibleColumns;
  style: React.CSSProperties;
  onUpdateData: (rowId: string, columnId: string, newValue: any) => void;
}

export interface TableCellProps {
  columnId: string;
  value: string | number | boolean;
  type: string;
  onUpdate: (newValue: any) => void;
}

export interface FilterProps {
  columns: TableColumn[];
  visibleColumns: VisibleColumns;
  setVisibleColumns: React.Dispatch<React.SetStateAction<VisibleColumns>>;
}

export interface ColumnInfo {
  visible: boolean;
  type: string;
}

export interface VisibleColumns {
  [columnName: string]: ColumnInfo;
}

export interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
}

export const Types = {
  Boolean: "boolean",
  String: "string",
  Number: "number",
};
