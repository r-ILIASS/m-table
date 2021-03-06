import styled from "styled-components";

export const StyledTable = styled.table`
  background: var(--white);
  border: var(--border);
  width: 100%;
  min-width: 468px;
  font-size: 0.9rem;
  margin: 20px 0;
  border-spacing: 0;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid black;
  }

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
    word-wrap: break-word;

    a {
      color: var(--blue);
    }
  }
`;
