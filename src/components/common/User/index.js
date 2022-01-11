import React from "react";

import { Wrapper } from "./User.styles";

const User = ({ name }) => (
  <Wrapper>
    <img src="https://picsum.photos/200" alt="user-image" />
    <p>{name}</p>
  </Wrapper>
);

export default User;
