import React, { useState } from "react";
import _ from "lodash";

import { Wrapper, Button } from "./Pagination.styles";

const Pagination = ({ itemsCount, pageSize, currentPage, onClick }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <Wrapper>
      {pages.map((page) => (
        <Button key={page} onClick={() => onClick(page)}>
          <span className={page === currentPage ? "active" : "innactive"}>
            {page}
          </span>
        </Button>
      ))}
    </Wrapper>
  );
};

export default Pagination;
