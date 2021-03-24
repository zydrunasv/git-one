import React, { Component } from "react";
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
                  <a href="/AboutUs">about us</a>
                </li>
                <li className="dropdown">
                  <a href="/contact">how to contact us</a>
                </li>
                <li className="dropdown">
                  <a href="/address">address</a>
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
