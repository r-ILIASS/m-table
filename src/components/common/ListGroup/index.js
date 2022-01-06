import React from "react";
// Styles
import { Wrapper } from "./ListGroup.styles";

const ListGroup = ({
  items,
  selectedItem,
  textProperty,
  valueProperty,
  onItemSelect,
}) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <li
          className={selectedItem.name === item.name ? "active" : "inactive"}
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
        >
          {item[textProperty]}
        </li>
      ))}
    </Wrapper>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
