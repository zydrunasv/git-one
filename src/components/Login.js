import React from "react";
import "./index.css";

const Login = () => {
  return (
    <div>
      <div className="login"> Login for Bandymas</div>
      <form>
        <label className="first-name">First name</label>
        <br />
        <input type="text" className="filling"></input> <br />
        <label className="last-name">Last Name</label>
        <br />
        <input type="text" className="filling"></input> <br />
        <br />
        <input type="submit" className="filling"></input>
        <br />
      </form>
    </div>
  );
};

export default Login;
