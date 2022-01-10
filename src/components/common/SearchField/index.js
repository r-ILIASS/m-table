import React from "react";

import { Wrapper, Search } from "./SearchField.styles";
import SearchIcon from "../../../assets/search-icon.svg";

const SearchField = ({ value, onChange }) => (
  <Wrapper>
    <Search
      type="text"
      name="query"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
    <img src={SearchIcon} alt="search-icon" />
  </Wrapper>
);

export default SearchField;
