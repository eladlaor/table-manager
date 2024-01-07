import "./App.css";
import { useState } from "react";
import Table from "./components/table/Table";
import mockData from "./dev/mockData";
import { VisibleColumns } from "./types";
import Filter from "./components/utils/Filter";
import Pagination from "./components/utils/Pagination";
import config from "./config";

export default function App() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("tableData");
    return savedData ? JSON.parse(savedData) : mockData.data;
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = config.pagination.itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const visibleColumnsInitialState: VisibleColumns = Object.fromEntries(
    mockData.columns.map((column) => [
      column.id,
      { visible: true, type: column.type },
    ])
  );

  const [visibleColumns, setVisibleColumns] = useState(() => {
    const savedColumns = localStorage.getItem("visibleColumns");
    return savedColumns ? JSON.parse(savedColumns) : visibleColumnsInitialState;
  });

  const updateData = (rowId: string, columnId: string, newValue: any) => {
    const newData = [...data];

    const rowIndex = newData.findIndex((row) => row.id === rowId);

    if (rowIndex !== -1) {
      newData[rowIndex] = {
        ...newData[rowIndex],
        [columnId]: newValue,
      };

      setData(newData);
      localStorage.setItem("tableData", JSON.stringify(newData));
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>a Cemento task</h1>
        <h2>double click on a cell to edit it 🥁</h2>
      </header>
      <Filter
        columns={mockData.columns}
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
      />
      <Table
        columns={mockData.columns.filter((col) => visibleColumns[col.id])}
        visibleColumns={visibleColumns}
        data={currentItems}
        onUpdateData={updateData}
      />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={setCurrentPage}
      />
    </div>
  );
}
