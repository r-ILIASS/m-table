import styled from "styled-components";

export const Wrapper = styled.button`
  padding: 3px 12px;
  background: var(
    ${({ variant }) => {
      switch (variant) {
        case "blue":
          return "--blue";
          break;
        case "empty":
          return "--white";
          break;
        case "red":
          return "--red";
          break;
      }
    }}
  );
  box-shadow: ${({ variant }) =>
    variant === "empty" ? "0px 0px 0px 2px var(--blue) inset" : "none"};
  border-radius: 7px;
  color: ${({ variant }) => (variant === "empty" ? "var(--blue)" : "#fff")};

  cursor: pointer;

  font-size: 20px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
