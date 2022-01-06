import styled from "styled-components";

export const Wrapper = styled.div`
  display: felx;
  align-items: center;
  gap: 5px;
`;

export const Button = styled.a`
  display: flex;
  color: var(--nav);
  font-size: 18px;

  .active {
    color: #fff;
    background: var(--blue);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .inactive {
    background: var(--white);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: 0 0 0 1px var(--nav) inset;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
