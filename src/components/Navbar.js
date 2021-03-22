import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="ui segment">
      <div className="Nav">
        <button className="nav">
          <NavLink to="/">Home</NavLink>
        </button>
        <button className="nav">
          <NavLink to="/login">Login</NavLink>
        </button>
        <button className="nav">
          <NavLink to="/register">Register</NavLink>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
