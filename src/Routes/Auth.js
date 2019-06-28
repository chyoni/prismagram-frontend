import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  ${props => props.theme.whiteBox}
  width:350px;
  height: 450px;
`;

export default () => {
  const [action, setAction] = useState("login");

  return (
    <Wrapper>
      {action === "login" ? <Box>Login</Box> : <Box>Signup</Box>}
    </Wrapper>
  );
};
