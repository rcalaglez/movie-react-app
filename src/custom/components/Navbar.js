import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../auth";

export const Navbar = () => {
  const { isUser, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Myvies!
      </Link>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          {isUser ? (
            <button
              className="nav-item nav-link btn"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          ) : (
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
          )}
        </ul>
      </div>
    </nav>
  );
};
