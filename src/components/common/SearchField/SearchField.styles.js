import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  img {
    max-width: 21px;
    position: absolute;
    left: 17px;
    top: 12px;
  }
`;

export const Search = styled.input`
  width: 100%;
  padding: 11px 52px;
  border: var(--border);
  border-radius: 8px;
  position: relative;
  background: var(--search);
  font-size: 1rem;

  ::placeholder {
    color: #d8d8d8;
    font-size: 1.125rem;
    position: absolute;
    top: 10px;
  }
`;
