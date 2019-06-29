import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

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
  width: 350px;
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

export default ({
  action,
  setAction,
  loginEmail,
  username,
  firstName,
  lastName,
  email,
  secret,
  onSubmit
}) => {
  return (
    <Wrapper>
      <Form>
        {action === "login" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"이메일(Email)"} {...loginEmail} type="email" />
            <Button text={"시크릿 키 요청"} />
          </form>
        )}{" "}
        {action === "signup" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"아이디(Username)"} {...username} />
            <Input placeholder={"성(first Name)"} {...firstName} />
            <Input placeholder={"이름(last Name)"} {...lastName} />
            <Input placeholder={"이메일(Email)"} {...email} type="email" />
            <Button text={"회원가입"} />
          </form>
        )}
        {action === "confirm" && (
          <form onSubmit={onSubmit}>
            <Input
              placeholder={"시크릿 키를 입력하세요"}
              required
              {...secret}
            />
            <Button text={"로그인"} state={"confirm"} />
          </form>
        )}
      </Form>
      {action !== "confirm" && (
        <ToggleBox>
          {action === "login" ? (
            <>
              <PlainText>계정이 없으신가요?</PlainText>
              <Link onClick={() => setAction("signup")}>회원가입</Link>
            </>
          ) : (
            <>
              <PlainText>계정이 있으신가요?</PlainText>
              <Link onClick={() => setAction("login")}>로그인</Link>
            </>
          )}
        </ToggleBox>
      )}
    </Wrapper>
  );
};
