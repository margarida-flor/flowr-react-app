import React from "react";

import Details from "./Details";

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
          <Details />
        </div>
      </div>
    </div>
  );
}
