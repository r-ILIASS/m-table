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

export default ListGroup;
