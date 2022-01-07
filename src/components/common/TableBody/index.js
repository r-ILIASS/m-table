import _ from "lodash";
import React from "react";

const TableBody = ({ data, columns }) => {
  const decideCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((column) => (
            <td key={column.path || column.key}>{decideCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
