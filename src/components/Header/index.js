import React from "react";
import { useNavigate } from "react-router-dom";
// Components
import Button from "../common/Button";
import User from "../common/User";
// Styles
import { Wrapper, Content } from "./Header.styles";
// Assets
import Logo from "../../assets/logo.svg";

const Header = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Content>
        <img onClick={() => navigate("/")} src={Logo} alt="movie-table" />
        <div>
          {!user && (
            <>
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
            </>
          )}
          {user && (
            <>
              <User name={user.name} />
              <Button
                variant="blue"
                label="Logout"
                onClick={() => navigate("/logout")}
              />
            </>
          )}
        </div>
      </Content>
    </Wrapper>
  );
};

export default Header;
