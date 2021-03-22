import React from "react";
import "./index.css";

const Register = () => {
  return (
    <div>
      <div className="register"> Register for Bandymas</div>
      <form className="laukeliai">
        <label for="first-name">First name</label>
        <br />
        <input type="text" className="tekstas"></input> <br />
        <label for="last-name">Last Name</label>
        <br />
        <input type="text" className="tekstas"></input> <br />
        <label for="email">Email Address</label>
        <br />
        <input type="email" className="tekstas"></input> <br />
        <label for="email">Password</label>
        <br />
        <input type="password" className="tekstas"></input> <br />
        <label for="Country">Country</label>
        <br />
        <input type="text" className="tekstas"></input> <br />
        <label for="City">City</label>
        <br />
        <input type="text" className="tekstas"></input> <br />
        <label for="Street">Street</label>
        <br />
        <input type="text" className="tekstas"></input> <br />
        <label for="House-Number">House Number</label>
        <br />
        <input type="text" className="tekstas"></input> <br />
        <br />
        <input type="submit" className="tekstas"></input> <br />
      </form>
    </div>
  );
};

export default Register;
