import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Dashboard from "./layout/Dashboard";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
