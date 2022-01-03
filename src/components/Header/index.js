import React from "react";
// Components
import Button from "../common/Button";
// Styles
import { Wrapper, Content } from "./Header.styles";
// Assets
import Logo from "../../assets/logo.svg";

const Header = () => (
  <Wrapper>
    <Content>
      <img src={Logo} alt="movie-table" />
      <div className="buttons">
        <Button
          variant="empty"
          label="Login"
          onClick={() => console.log("login")}
        />
        <Button
          variant="blue"
          label="Register"
          onClick={() => console.log("register")}
        />
      </div>
    </Content>
  </Wrapper>
);

export default Header;
