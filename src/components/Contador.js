import React from "react";
import "../css/contador.css";

class Contador extends React.Component {
  render() {
    return <div className="contador">{this.props.numClics}</div>;
  }
}

export default Contador;
