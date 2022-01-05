import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: var(--maxW);
  margin: 0 auto;
  padding: 20px 0;

  p {
    margin-bottom: 20px;
  }

  span:hover {
    cursor: pointer;
  }

  img {
    width: 20px;
  }
`;
