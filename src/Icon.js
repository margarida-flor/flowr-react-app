import React from "react";

export default function Icon() {
  return (
    <div className="weather-icon">
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        alt="light rain"
        id="icon"
        className="mx-auto"
      />

      <div className="weather-description">few clouds</div>
    </div>
  );
}
