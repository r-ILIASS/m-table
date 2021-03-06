import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ label, variant, size, onClick }) => (
  <Wrapper type="button" variant={variant} size={size} onClick={onClick}>
    {label}
  </Wrapper>
);

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

// variant property can either be: "blue", "red" or "empty".
