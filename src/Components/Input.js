import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.input`
  width: 250px;
  height: 37px;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  border: ${props => props.theme.boxBorder};
  padding: 10px 10px;
`;

const Input = ({ placeholder }) => <Container placeholder={placeholder} />;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default Input;
