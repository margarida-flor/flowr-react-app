import React from "react";
import "./Details.css";

export default class Details extends React.Component {
  render = () => {
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
  };
}
