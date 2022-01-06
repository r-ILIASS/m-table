import React from "react";

import { Wrapper, Item } from "./ListGroup.styles";

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <Item key={item[valueProperty]}>{item[textProperty]}</Item>
      ))}
    </Wrapper>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
