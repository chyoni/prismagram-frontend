import React from "react";
import styled from "styled-components";
import { IndicatorCircle } from "./Icons";

const Container = styled.div`
  margin-right: 8px;
  svg {
    fill: ${props => (props.showing ? "white" : props.theme.darkGreyColor)};
  }
`;

const Indicator = ({ countArray, currentItem }) => {
  return countArray.map((count, index) => {
    return <Circle key={index} showing={index === currentItem} />;
  });
};

const Circle = props => {
  console.log(props);
  return (
    <Container showing={props.showing}>
      <IndicatorCircle />
    </Container>
  );
};

export default Indicator;
