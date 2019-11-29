import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDetails(props) {
  return (
    <div className="Body">
      <div className="City">
        <span>{props.details.city}</span>
      </div>
      <div className="Temperature">
        <span className="weather-unit">
          {Math.round(props.details.temperature)}
          <a href="/">°C</a>│<a href="/">°F</a>
        </span>
      </div>
      <div className="weather-icon">
        <WeatherIcon code={props.details.icon} />
        <div className="weather-description">{props.details.description}</div>
      </div>
      <div className="current-conditions">
        Wind:
        <span> {props.details.wind} </span>km/h
        <div>
          Humidity:
          <span> {props.details.humidity}</span>%
        </div>
      </div>
    </div>
  );
}
