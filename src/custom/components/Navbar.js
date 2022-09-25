import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../auth";

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
        <button className="nav-item nav-link btn" onClick={logout}>
          Logout
        </button>
      );
    }
    return (
      <button className="nav-item nav-link btn" onClick={goLoginView}>
        Login
      </button>
    );
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Myvies!
      </Link>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">{getLoginButton()}</ul>
      </div>
    </nav>
  );
};
