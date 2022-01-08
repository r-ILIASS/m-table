import React from "react";

import TableHeader from "../TableHeader";
import TableBody from "../TableBody";

import { StyledTable } from "./Table.styles";

const Table = ({ data, columns, sortColumn, handleSort }) => {
  return (
    <StyledTable>
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        handleSort={handleSort}
      />
      <TableBody data={data} columns={columns} />
    </StyledTable>
  );
};

export default Table;
