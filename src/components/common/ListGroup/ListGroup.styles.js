import styled from "styled-components";

export const Wrapper = styled.ul`
  width: 175px;
  padding: 12px;
  background: var(--white);
  border: var(--border);
  display: flex;
  flex-direction: column;
  gap: 6px;

  li {
    list-style: none;
    font-size: 0.8rem;
    font-weight: 500;
    color: (--black);
    padding: 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
  }

  .active {
    color: var(--blue);
    background: #e3f2fd;
  }

  .inactive {
    color: inherit;
  }
`;
