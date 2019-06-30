import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  height: 60px;
`;

const PlainBox = styled.div``;

const ProjectBox = styled.div``;

const Text = styled.p`
  color: ${props =>
    props.identify === "plain"
      ? props.theme.darkBlueColor
      : props.theme.lightGreyColor};
  font-weight: 600;
  font-size: 17px;
`;

export default () => {
  return (
    <Wrapper>
      <TextBox>
        <PlainBox>
          <Text identify="plain">
            <span role="img" aria-label="happy">
              💗
            </span>
            wo._.n
            <span role="img" aria-label="happy">
              💗
            </span>
          </Text>
        </PlainBox>
        <ProjectBox>
          <Text identify="project">WONSTARGRAM</Text>
        </ProjectBox>
      </TextBox>
    </Wrapper>
  );
};
