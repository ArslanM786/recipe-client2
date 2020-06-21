import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <nav classNam="nav mb-3">
      <h3>Logo</h3>

      <Link to="/" className="nav-link">
        <l1>Home</l1>
      </Link>
      <Link to="/login" className="nav-link">
        <l1>Login</l1>
      </Link>
      <Link to="/signup" className="nav-link">
        <l1>Signup</l1>
      </Link>
      <Link to="/recipes" className="nav-link">
        <l1>Recipes</l1>
      </Link>
      <Link to="/reviews" className="nav-link">
        <l1>Reviews</l1>
      </Link>
      <Link to="/profile" className="nav-link">
        <l1>Profile</l1>
      </Link>
    </nav>
  );
};

export default NavBarView;
