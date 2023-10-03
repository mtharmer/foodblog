import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "reducers/authSlice";

export default function Navbar() {
  const auth = useSelector(state => state.auth);
  const isLoggedIn = useSelector(state => state.auth.loggedIn);
  const dispatch = useDispatch();

  function clickLogout(event) {
    event.preventDefault();
    dispatch(logout(auth));
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/recipes" className="nav-link">Recipes</Link>
          <Link to="/signup" className="nav-link" hidden={isLoggedIn}>Sign Up</Link>
          <Link to="/login" className="nav-link" hidden={isLoggedIn}>Log In</Link>
          <Link to="#" className="nav-link" onClick={clickLogout} hidden={!isLoggedIn}>Log Out</Link>
          <Link to="/profile" className="nav-link" hidden={!isLoggedIn}>Profile</Link>
        </div>
      </div>
    </nav>
  );
}
