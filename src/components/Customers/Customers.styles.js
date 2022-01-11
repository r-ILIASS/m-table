import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 20px;
`;

export const Content = styled.div`
  border: 1px solid red;
  max-width: var(--maxW);
  margin: 0 auto;
  padding: 20px 0;

  display: flex;
  gap: 30px;
`;

export const Form = styled.form`
  width: 300px;
  padding: 15px;
  border: var(--border);
  background: var(--white);

  display: flex;
  flex-direction: column;
  gap: 9px;

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-bottom: 5px;

    label {
      font-size: 0.87rem;
      font-weight: 300;
      color: var(--grey);
      cursor: pointer;
    }

    input {
      border: var(--border);
      padding: 5px;
      font-size: 1.125rem;
    }

    p {
      font-size: 0.85rem;
      font-weight: 300;
      color: var(--red);
    }
  }

  button {
    width: 100%;
    margin-top: 4px;
    padding: 5px 12px;
    background: var(--blue);
    border-radius: 7px;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }
`;
