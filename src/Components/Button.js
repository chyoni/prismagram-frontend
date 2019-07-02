import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RED_BUTTON = "#e84118";

const Container = styled.button`
  width: 100%;
  padding: 7px 0; /*상하 좌우*/
  background-color: ${props =>
    props.state === "confirm" ? RED_BUTTON : props => props.theme.blueColor};
  border-radius: ${props => props.theme.borderRadius};
  border: 0;
  color: white;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
`;

const Button = ({ text, state = "", className }) => {
  return (
    <Container className={className} state={state}>
      {text}
    </Container>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  state: PropTypes.string
};

export default Button;
