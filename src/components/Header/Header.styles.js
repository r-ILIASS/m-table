import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  padding: 0px 20px;
  border-bottom: var(--border);
`;

export const Content = styled.div`
  max-width: var(--maxW);
  margin: 0 auto;
  padding-top: 12px;
  padding-bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    height: 47px;

    @media (max-width: 768px) {
      height: 40px;
    }
  }

  img {
    width: 47px;

    @media screen and (max-width: 768px) {
      width: 40px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }
`;
