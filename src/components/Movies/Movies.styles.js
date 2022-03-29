import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: var(--maxW);
  margin: 0 auto;
  padding: 20px 0;
  display: grid;
  grid-template-columns: 2fr 10fr;
  gap: 1rem;

  @media screen and (max-width: 897px) {
    grid-template-columns: 2fr 10fr;
  }

  p {
    font-size: 1.37rem;
  }
`;

export const Hflex = styled.div`
  min-width: 468px;
  max-height: 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
