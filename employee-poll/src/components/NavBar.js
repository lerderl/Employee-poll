import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logoutAuthedUser } from "../actions/authedUser";

const NavBar = ({ user, authedUser, dispatch }) => {
  const handleClick = () => {
    dispatch(logoutAuthedUser());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          type="button"
          aria-expanded="false"
          data-bs-toggle="collapse"
          className="navbar-toggler"
          aria-label="Toggle navigation"
          aria-controls="navbarSupportedContent"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new">New</Link>
            </li>
          </ul>
          <ul className="d-flex">
            {authedUser ?? (
              <li className="form-control me-2">
                <img src={user?.avatarURL} alt={`${authedUser}`} width="30" height="24" />
                <div>{user?.name}</div>
              </li>
            )}
            <li>
              {authedUser ? (
                <div onClick={handleClick}>
                  <Link to="/login" className="navbar-text">
                    Logout
                  </Link>
                </div>
              ) : (
                <Link to="/login" className="navbar-text">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
    user: users[authedUser]
  };
};

export default connect(mapStateToProps)(NavBar);
