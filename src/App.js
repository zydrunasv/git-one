import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <BrowserRouter>
      <div className="ui first line">
        <div className="header"> Practise</div>
        <Navbar />
        <Route exact path="/" exact component={Home} />
        <Route exact path="/Login" exact component={Login} />
        <Route exact path="/Register" exact component={Register} />
        <div className="footer">Zydrunas Valciukas 2021</div>
      </div>
    </BrowserRouter>
  );
};

export default App;
