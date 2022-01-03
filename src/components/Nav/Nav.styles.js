import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  padding: 0px 20px;
  border-bottom: var(--border);
`;

export const Content = styled.nav`
  max-width: var(--maxW);
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    text-decoration: none;
    color: var(--nav);
    padding: 16px 2px 13px 2px;
    font-size: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 0.75rem;
    }

    span {
      margin-right: 4px;

      svg {
        width: 20px;
        height: 15px;
        color: var(--nav);

        @media screen and (max-width: 768px) {
          width: 18px;
          height: 13px;
        }
      }
    }
  }

  a.active {
    color: var(--blue);
    box-shadow: 0px -3px 0px 0px var(--blue) inset;

    svg {
      color: var(--blue);
    }
  }
`;
