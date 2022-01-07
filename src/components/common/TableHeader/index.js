import React from "react";

const TableHeader = ({ columns, sortColumn, handleSort }) => {
  const raiseSort = (path) => {
    let order = "asc";
    if (sortColumn.path === path) {
      order = sortColumn.order === "asc" ? "desc" : "asc";
    }

    handleSort({ path, order });
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
