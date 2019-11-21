import React from "react";

import Search from "./Search";
import Details from "./Details";

export default function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-6">
          <Search />
        </div>
        <div className="col-6">
          <Details />
        </div>
      </div>
    </div>
  );
}
