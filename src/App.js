import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./layout/Dashboard";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
