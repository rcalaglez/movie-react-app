import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../auth";
import Button from "../../custom/components/Button";

import "./login.scss";

export const LoginView = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login();
    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      {/* <input type="button" value="Login" onClick={onLogin} /> */}
      <header>
        <nav className="login-header"></nav>
      </header>
      <main className="login-content">
        <Button onClick={onLogin}>Login</Button>
      </main>
    </>
  );
};
