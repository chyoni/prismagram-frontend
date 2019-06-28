import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Wrapper = styled.div`
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  ${props => props.theme.whiteBox}
  max-width:350px;
  height: 410px;
  margin-bottom: 15px;
`;

const ToggleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.theme.whiteBox}
  width:350px;
  height: 60px;
`;

const PlainText = styled.span`
  font-size: 14px;
  margin-right: 6px;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    text-align: center;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
      &::placeholder {
        font-size: 12px;
        color: ${props => props.theme.darkGreyColor};
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

export default () => {
  const [action, setAction] = useState("login");

  return (
    <Wrapper>
      <Form>
        {action === "login" ? (
          <form>
            <Input placeholder={"아이디 또는 이메일"} />
            <Input placeholder={"요청받은 시크릿 키"} />
            <Button text={"로그인"} />
          </form>
        ) : (
          <form>
            <Input placeholder={"아이디(Username)"} />
            <Input placeholder={"성(first Name)"} />
            <Input placeholder={"이름(last Name)"} />
            <Input placeholder={"이메일(Email)"} />
            <Input placeholder={"비밀번호(Password)"} />
            <Button text={"회원가입"} />
          </form>
        )}
      </Form>
      {action === "login" ? (
        <ToggleBox>
          <PlainText>계정이 없으신가요?</PlainText>
          <Link onClick={() => setAction("signup")}>회원가입</Link>
        </ToggleBox>
      ) : (
        <ToggleBox>
          <PlainText>계정이 있으신가요?</PlainText>
          <Link onClick={() => setAction("login")}>로그인</Link>
        </ToggleBox>
      )}
    </Wrapper>
  );
};
