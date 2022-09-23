import React from "react";

export const LoginView = () => {
  return (
    <>
      <input
        type="button"
        value="Login"
        onClick={() => {
          console.log("clicked!");
        }}
      />
    </>
  );
};
