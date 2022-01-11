import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: var(--maxW);
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  gap: 64px;

  p {
    font-size: 1.37rem;
  }

  .space {
    width: 24%;
    height: 297px;
    display: flex;

    @media screen and (max-width: 1054px) {
      display: none;
    }
  }

  .mt {
    margin-top: 61px;
  }
`;

export const Hflex = styled.div`
  min-width: 468px;
  max-height: 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Svg = styled.img`
  width: 100%;
`;
