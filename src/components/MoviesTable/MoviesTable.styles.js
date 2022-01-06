import styled from "styled-components";

export const Table = styled.table`
  background: var(--white);
  border: var(--border);
  min-width: 468px;
  font-size: 0.9rem;
  margin: 20px 0;
  border-spacing: 0;
  border-collapse: collapse;

  th {
    padding: 12px 10px;
    text-align: left;
    border-bottom: var(--border);

    :hover {
      cursor: pointer;
    }
  }

  td {
    padding: 6px 10px;
    text-align: left;
    border-bottom: var(--border);
  }
`;

export const Thead = styled.thead`
  th {
    font-weight: 500;
    text-align: left;
  }
`;

export const Tbody = styled.tbody`
  tr {
    border-bottom: 1px solid black;
  }
  /* td {
    padding: 17px 19px;
    text-align: left;
    border-bottom: var(--border);
  } */
`;
