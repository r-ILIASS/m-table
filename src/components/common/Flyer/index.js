import React from "react";
// Assets
import Background from "../../../assets/code-bg.jpg";
import GithubIcon from "../../../assets/github-icon.svg";
// Styles
import { Wrapper } from "./Flyer.styles";

const Flyer = () => (
  <a href="https://github.com/r-ILIASS/m-table" target="_blank">
    <Wrapper image={Background}>
      <h3>Checkout the source code on Github</h3>
      <img src={GithubIcon} alt="github-icon" />
    </Wrapper>
  </a>
);

export default Flyer;
