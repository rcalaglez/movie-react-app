import React, { useContext } from "react";
import { UserContext } from "../../auth";

export const LoginView = () => {
  const { login } = useContext(UserContext);

  return (
    <>
      <input
        type="button"
        value="Login"
        onClick={() => {
          login();
        }}
      />
    </>
  );
};
