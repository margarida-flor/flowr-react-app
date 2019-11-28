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
                <FormattedDate date={weatherData.date} />

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
        <WeatherDetails details={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
