import React from "react";

export default class Conditions extends React.Component {
  render = () => {
    return (
      <div className="current-conditions">
        Wind:
        <span id="wind"> 10 </span>km/h
        <div>
          Humidity:
          <span id="humidity"> 50</span>%
        </div>
      </div>
    );
  };
}
