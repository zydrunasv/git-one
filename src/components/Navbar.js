import React, { Component } from "react";
import { NavbarDropdown } from "react-navbar-dropdown/dist/navbar-dropdown";
import { NavLink } from "react-router-dom";
import "./index.css";

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <ul>
            <li className="nav">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav">
              <NavLink to="/about">About</NavLink>
              <ul className="dropdown-fields">
                <li className="dropdown">
                  <NavLink to="/AboutUs">about us</NavLink>
                </li>
                <li className="dropdown">
                  <NavLink to="/contact">how to contact us</NavLink>
                </li>
                <li className="dropdown">
                  <NavLink to="/address">address</NavLink>
                </li>
              </ul>
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
  }
}
export default Navbar;
