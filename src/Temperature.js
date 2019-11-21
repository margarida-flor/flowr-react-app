import React from "react";

export default class Temperature extends React.Component {
  render = () => {
    return (
      <div className="Temperature">
        <span id="temperature" />
        <span className="weather-unit">
          19
          <a href="#" id="celsius">
            °C
          </a>
          │
          <a href="#" id="fahrenheit">
            °F
          </a>
        </span>
      </div>
    );
  };
}
