import React from "react";

import "./WeatherBody.css";

export default function WeatherBody() {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-6">
          <form>
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoComplete="off"
            />

            <input type="submit" value="search" />
          </form>
        </div>
        <div className="col-6">
          <div className="Details">
            <div className="row">
              <div className="col-4">19:20</div>
              <div className="col-4">Monday</div>
              <div className="col-4">2019.11.11</div>

              <div className="row">
                <div className="col-6" />
                <div className="col-6">
                  <button className="current-place">Current Location</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Body">
        <div className="City">
          <span>Lisboa</span>
        </div>
        <div className="Temperature">
          <span className="weather-unit">
            19
            <a href="/">°C</a>│<a href="/">°F</a>
          </span>
        </div>
        <div className="weather-icon">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="light rain"
            id="icon"
            className="mx-auto"
          />

          <div className="weather-description">few clouds</div>
        </div>
        <div className="current-conditions">
          Wind:
          <span> 10 </span>km/h
          <div>
            Humidity:
            <span> 50</span>%
          </div>
        </div>
      </div>
    </div>
  );
}
