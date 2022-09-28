import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../auth";
import Button from "./Button";

import "./navbar.scss";

export const Navbar = () => {
  const { isUser, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const goLoginView = () => {
    navigate("/login", {
      replace: true,
    });
  };

  const getLoginButton = () => {
    if (isUser) {
      return (
        <Button className="header__log__button" onClick={logout}>
          Logout
        </Button>
      );
    }
    return (
      <Button className="header__log__button" onClick={goLoginView}>
        Login
      </Button>
    );
  };

  return (
    <nav className="header ">
      <Link className="header__title" to="/">
        MYVIES!
      </Link>

      <div className="header__log">
        <ul className="">{getLoginButton()}</ul>
      </div>
    </nav>
  );
};
