import React from "react";
// Assets
import Up from "../../../assets/sort-up.svg";
import Down from "../../../assets/sort-down.svg";

const TableHeader = ({ columns, sortColumn, handleSort }) => {
  const raiseSort = (path) => {
    let order = "asc";
    if (sortColumn.path === path) {
      order = sortColumn.order === "asc" ? "desc" : "asc";
    }

    handleSort({ path, order });
  };

  const renderSortIcon = (column) => {
    if (column.path !== sortColumn.path || column.content) return null;

    if (sortColumn.order === "asc")
      return (
        <img
          style={{ width: "12px", height: "14px" }}
          src={Up}
          alt="chevron-up"
        />
      );

    return (
      <img
        style={{ width: "12px", height: "14px" }}
        src={Down}
        alt="chevron-down"
      />
    );
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
