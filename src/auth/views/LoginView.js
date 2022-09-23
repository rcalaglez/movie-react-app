import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../auth";

export const LoginView = () => {
  const { login, isUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login();
    console.log(isUser);
    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <input type="button" value="Login" onClick={onLogin} />
    </>
  );
};
