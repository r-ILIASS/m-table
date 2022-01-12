import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: var(--maxW);
  padding: 20px 0;
  margin: 0 auto;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 285px));
  grid-gap: 2rem;
`;

export const Form = styled.form`
  background: var(--white);
  border: var(--border);
  max-width: 285px;
  padding: 38px 31px;

  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 18px;
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
    select {
      border: var(--border);
      padding: 4px;
      font-size: 1rem;
      background: var(--white);
    }

    p {
      font-size: 0.8rem;
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
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const Card = styled.div`
  min-height: 307px;
  padding: 20px 15px;
  background: #fff;
  border: 1px solid var(--blue);

  h3 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 10px;
    line-height: 1.2;

    span {
      font-weight: 500;
    }
  }
`;
