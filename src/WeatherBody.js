import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";

import "./WeatherBody.css";

export default function WeatherBody(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }

  function search() {
    const apiKey = "74024ce79be1c8b250c329721fb528ee";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Header">
          <div className="row">
            <div className="col-5">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
                <button type="submit" className="search-button">
                  Search
                </button>
              </form>
            </div>
            <div className="col-2" />

            <div className="col-5">
              <div className="Details">
                <FormattedDate date={weatherData.date} />
                <div className="row">
                  <div className="col-6" />
                  <div className="col-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <WeatherDetails details={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
