import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../auth";
import Button from "../../custom/components/Button";
import InputText from "../../custom/components/InputText";
import { useFormValidation } from "../../custom/hooks/useFormValidation";

import tmDBApi from "../../api/tmDBApi";

import "./login.scss";

export const LoginView = () => {
  const { login } = useContext(UserContext);
  const { handleSubmit, handleChange, data, errors } = useFormValidation({
    validations: {
      username: {
        required: {
          value: true,
          message: "This field cannot be empty",
        },
        pattern: {
          value: /^[a-zA-Z0-9_.]+$/,
          message:
            "It must contains only alphanumerics, underscores, and periods",
        },
      },
      password: {
        required: {
          value: true,
          message: "This field cannot be empty",
        },
        pattern: {
          value: /^(?=.*\d)(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
          message:
            "Min 6 letters, at least a symbol, upper and lower case letters and a number",
        },
      },
    },
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: () => {
      onLogin();
    },
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = async () => {
    const response = await tmDBApi.loginAsGuest({ params: {} });
    console.log(response);
    let isLogged = response && response.guest_session_id;
    if (isLogged) {
      login(response.guest_session_id);
      setErrorMessage("");
      navigate("/", {
        replace: true,
      });
    } else {
      setErrorMessage("Something went wrong...");
    }
  };

  return (
    <>
      <header>
        <nav className="header ">
          <Link className="header__title" to="/">
            MYVIES!
          </Link>
        </nav>
      </header>
      <main className="login-content">
        <InputText
          required
          id="username"
          value={data.username || ""}
          label="Username"
          errorMessage={errors.username}
          onChange={handleChange("username")}
        />

        <InputText
          required
          id="password"
          value={data.password || ""}
          type="password"
          label="Password"
          errorMessage={errors.password}
          onChange={handleChange("password")}
        />

        <Button onClick={(e) => handleSubmit()}>Login</Button>
        {errorMessage.length !== 0 ? (
          <span className="animate__animated animate__fadeIn animate__fast login-content__error">
            {errorMessage}
          </span>
        ) : null}
      </main>
      <footer className="footer">
        <span className="footer__app-title">
          MYVIES! is a web application made by Rafael Cala
        </span>
      </footer>
    </>
  );
};
