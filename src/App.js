import React from "react";
import WeatherBody from "./WeatherBody";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./WeatherBody.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherBody defaultCity="Lisbon" />
      </div>
    </div>
  );
}

export default App;
