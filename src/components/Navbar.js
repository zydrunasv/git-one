import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li className="nav">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="nav">
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
