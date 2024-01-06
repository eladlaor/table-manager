export interface TableColumn {
  id: string;
  ordinalNo: number;
  title: string;
  type: string;
  width?: number;
}

export interface TableHeaderProps {
  columns: TableColumn[];
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
  onUpdate: (newValue: any) => void;
}

export interface FilterProps {
  columns: TableColumn[];
  visibleColumns: {
    [key: string]: boolean;
  };
  setVisibleColumns: (visibleColumns: { [key: string]: boolean }) => void;
}

export interface VisibleColumns {
  [columnName: string]: boolean;
}

export interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
}
