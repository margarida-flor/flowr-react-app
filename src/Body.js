import React from "react";
import City from "./City";
import Temperature from "./Temperature";
import Icon from "./Icon";
import Conditions from "./Conditions";

import "./Body.css";

export default class Body extends React.Component {
  render = () => {
    return (
      <div className="Body">
        <City />
        <Temperature />
        <Icon />
        <Conditions />
      </div>
    );
  };
}
