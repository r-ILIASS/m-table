import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 30px 5px;
  width: 179px;
  height: 279px;
  background: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  animation: animateImage 1s;
  display: flex;
  justify-content: center;

  h3 {
    color: var(--background);
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }

  img {
    position: absolute;
    max-width: 103px;
    top: 50%;
    transform: translateY(-50%);
  }

  @keyframes animateImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
