import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="ui-segment">
      <div className="nav">
        <NavLink to="/">
          <button className="nav">Home</button>
        </NavLink>

        <NavLink to="/login">
          <a className="nav">Login</a>
        </NavLink>

        <NavLink to="/register">
          <a className="nav">Register</a>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
