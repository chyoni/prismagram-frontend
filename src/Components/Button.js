import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  padding: 7px 0; /*상하 좌우*/
  background-color: ${props => props.theme.blueColor};
  border-radius: ${props => props.theme.borderRadius};
  border: 0;
  color: white;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
`;

const Button = ({ text }) => <Container>{text}</Container>;

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
