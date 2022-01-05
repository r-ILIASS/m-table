import styled from "styled-components";

export const Spinner = styled.div`
  border: 5px solid #e0e3e7;
  border-top: 5px solid var(--blue);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 20px auto;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
