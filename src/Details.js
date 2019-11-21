import React from "react";

import "./Details.css";

export default function Details() {
  return (
    <div className="Details">
      <div className="row">
        <div className="col-4" id="current-time">
          19:20
        </div>
        <div className="col-4" id="week-day">
          Monday
        </div>
        <div className="col-4" id="current-date">
          2019.11.11
        </div>

        <div className="row">
          <div className="col-6" />
          <div className="col-6">
            <button className="current-place" id="current-location">
              Current Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
function updateDateTime() {
  let [hourDisplay, setHourDisplay] = useState() //hourDisplay = document.querySelector("#current-time")//;
  let [currentTime, setCurrentTime] = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let weekdayDisplay = document.querySelector("#week-day");
  let currentDay = new Date();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let weekday = weekdays[currentDay.getDay()];
  let dateDisplay = document.querySelector("#current-date");
  let date = new Date();
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ];
  let month = months[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();

  hourDisplay.innerHTML = `${hours}:${minutes}`;
  weekdayDisplay.innerHTML = `${weekday}`;
  dateDisplay.innerHTML = `${year}.${month}.${day}`;
}
*/
