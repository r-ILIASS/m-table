import styled from "styled-components";
import Background from "../../assets/login-bg.jpg";

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxW);
  height: 800px;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  border: var(--border);

  ::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -20;
    animation: animateHeroImage 1s;

    @keyframes animateHeroImage {
      from {
        opacity: 0;
      }
      to {
        opacity: 0.6;
      }
    }
  }

  form {
    background: var(--white);
    border: var(--border);
    max-width: 685px;
    min-width: 685px;
    padding: 38px 31px;

    h1 {
      font-size: 26px;
      font-weight: 500;
      margin-bottom: 18px;

      span {
        font-size: 1rem;
        font-weight: 400;
      }
    }

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 12px;

      label {
        font-size: 0.9rem;
        font-weight: 300;
        color: var(--grey);
        cursor: pointer;
      }

      input {
        border: var(--border);
        padding: 10px;
        font-size: 1.125rem;
      }

      select {
        border: var(--border);
        padding: 10px;
        font-size: 1.125rem;
        background: var(--white);
      }

      p {
        font-size: 0.85rem;
        font-weight: 300;
        color: var(--red);
      }
    }

    button {
      width: 100%;
      margin-top: 20px;
      padding: 5px 12px;
      background: var(--blue);
      border-radius: 7px;
      color: #fff;
      font-size: 1.125rem;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;
