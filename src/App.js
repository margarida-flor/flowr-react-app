import React from "react";
import Header from "./Header";
import Body from "./Body";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
