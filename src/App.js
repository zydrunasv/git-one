import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import background from "./img/nature.jpg";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="background"
        style={{ backgroundImage: `url(${background})` }}
      >
        <body>
          <header className="header">First Web Page</header>
          <Navbar />
          <Route exact path="/" exact component={Home} />
          <Route exact path="/About" exact component={About} />
          <Route exact path="/Login" exact component={Login} />
          <Route exact path="/Register" exact component={Register} />
          <footer className="footer">Zydrunas Valciukas 2021</footer>
        </body>
      </div>
    </BrowserRouter>
  );
};

export default App;
