import React, { useState } from "react";
import axios from "axios";

import "./WeatherBody.css";

export default function WeatherBody(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/10d@2x.png`,

      wind: response.data.wind.speed,
      city: response.data.name
    });

    console.log(response.data.weather[0].icon);
  }

  function search() {
    const apiKey = "74024ce79be1c8b250c329721fb528ee";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
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
                      <button className="current-place">
                        Current Location
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Body">
            <div className="City">
              <span>{weatherData.city}</span>
            </div>
            <div className="Temperature">
              <span className="weather-unit">
                {Math.round(weatherData.temperature)}
                <a href="/">°C</a>│<a href="/">°F</a>
              </span>
            </div>
            <div className="weather-icon">
              <img src={weatherData.icon} alt="" className="mx-auto" />

              <div className="weather-description">
                {weatherData.description}
              </div>
            </div>
            <div className="current-conditions">
              Wind:
              <span> {weatherData.wind} </span>km/h
              <div>
                Humidity:
                <span> {weatherData.humidity}</span>%
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
