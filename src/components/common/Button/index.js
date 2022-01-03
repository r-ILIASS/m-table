import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ label, variant, onClick }) => (
  <Wrapper type="button" variant={variant} onClick={onClick}>
    {label}
  </Wrapper>
);

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
