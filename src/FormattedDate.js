import React from "react";

export default function FormattedDate(props) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let weekday = weekdays[props.date.getDay()];
  let day = props.date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }

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

  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="row">
      <div className="col-3">
        {hours}:{minutes}
      </div>
      <div className="col-3">{weekday}</div>
      <div className="col-3">
        {year}.{month}.{day}
      </div>
    </div>
  );
}
