import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <body>
          <header className="header">First Web Page</header>
          <Navbar />
          <Route exact path="/" exact component={Home} />
          <Route exact path="/Login" exact component={Login} />
          <Route exact path="/Register" exact component={Register} />
          <footer className="footer">Zydrunas Valciukas 2021</footer>
        </body>
      </div>
    </BrowserRouter>
  );
};

export default App;
