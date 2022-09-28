import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../auth";
import Button from "./Button";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import "./navbar.scss";

export const Navbar = () => {
  const { isUser, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const goLoginView = () => {
    navigate("/login", {
      replace: true,
    });
  };

  const notifyLogout = () => {
    toast.info("Now you're logged out", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const getLoginButton = () => {
    if (isUser) {
      return (
        <Button
          className="header__log__button"
          onClick={() => {
            logout();
            notifyLogout();
          }}
        >
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Link className="header__title" to="/">
        MYVIES!
      </Link>

      <div className="header__log">
        <ul className="">{getLoginButton()}</ul>
      </div>
    </nav>
  );
};
