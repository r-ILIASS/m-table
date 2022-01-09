import React from "react";
import { useNavigate } from "react-router-dom";
// Components
import Button from "../common/Button";
// Styles
import { Wrapper, Content } from "./Header.styles";
// Assets
import Logo from "../../assets/logo.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Content>
        <img onClick={() => navigate("/")} src={Logo} alt="movie-table" />
        <div className="buttons">
          <Button
            variant="empty"
            label="Login"
            onClick={() => navigate("/login")}
          />
          <Button
            variant="blue"
            label="Register"
            onClick={() => navigate("/register")}
          />
        </div>
      </Content>
    </Wrapper>
  );
};

export default Header;
