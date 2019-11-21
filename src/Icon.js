import React from "react";

export default class Icon extends React.Component {
  render = () => {
    return (
      <div className="weather-icon">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="light rain"
          id="icon"
          className="mx-auto"
        />

        <div id="description" className="weather-description">
          few clouds
        </div>
      </div>
    );
  };
}
