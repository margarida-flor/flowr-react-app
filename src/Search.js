import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <input
          type="search"
          placeholder="Enter a city"
          id="search-input"
          className="form-control"
          autocomplete="off"
        />

        <input type="submit" value="search" />
      </form>
    </div>
  );
}
