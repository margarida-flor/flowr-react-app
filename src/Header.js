import React from "react";

export default function Header() {
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
    </div>
  );
}
