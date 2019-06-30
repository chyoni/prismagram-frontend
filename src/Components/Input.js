import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.input`
  width: 250px;
  height: ${props => (props.bigSize ? "37px" : "28px")};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  border: ${props => props.theme.boxBorder};
  padding: 10px 10px;
`;

const Input = ({
  placeholder,
  required = true,
  value,
  bigSize = false,
  onChange,
  type = "text"
}) => (
  <Container
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
    bigSize={bigSize}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  bigSize: PropTypes.bool
};

export default Input;
