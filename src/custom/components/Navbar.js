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
      return <Button onClick={logout}>Logout</Button>;
    }
    return <Button onClick={goLoginView}>Login</Button>;
  };

  return (
    <nav className="header ">
      <Link className="title" to="/">
        MYVIES!
      </Link>

      <div>
        <ul className="">{getLoginButton()}</ul>
      </div>
    </nav>
  );
};
