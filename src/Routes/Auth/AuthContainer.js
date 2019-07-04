import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import {
  REQUEST_SECRET,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOG_IN
} from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("login");
  const loginEmail = useInput("");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const secret = useInput("");

  const requestSecretMutation = useMutation(REQUEST_SECRET, {
    variables: { email: loginEmail.value }
  });

  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: username.value,
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });

  const confirmSecretMutation = useMutation(CONFIRM_SECRET, {
    variables: {
      email: loginEmail.value,
      secret: secret.value
    }
  });

  const logIn = useMutation(LOG_IN);

  const onSubmit = async e => {
    e.preventDefault();
    if (action === "login") {
      if (loginEmail.value !== "") {
        try {
          const {
            data: { requestSecret }
          } = await requestSecretMutation();
          if (requestSecret) {
            setTimeout(() => setAction("confirm"), 1000);
            toast.success("시크릿 키를 보냈습니다 메일을 확인해주세요😉");
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("이메일 주소를 입력하세요");
      }
    } else if (action === "signup") {
      if (username.value !== "" && email.value !== "") {
        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();
          if (createAccount) {
            toast.success("회원가입이 완료되었습니다 로그인해주세요😘");
            setTimeout(() => setAction("login"), 3000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("이메일과 아이디는 필수요소 입니다");
      }
    } else if (action === "confirm") {
      if (secret.value !== "") {
        try {
          const {
            data: { confirmSecret: token }
          } = await confirmSecretMutation();
          if (token !== "" && token !== undefined) {
            await logIn({ variables: { token } });
            window.location.reload();
          } else {
            throw Error();
          }
        } catch (e) {
          toast.error("시크릿 키를 잘못 입력했습니다");
        }
      }
    }
  };

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      loginEmail={loginEmail}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};
