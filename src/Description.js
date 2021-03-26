import React from "react";
import Row from "react-bootstrap/Row";
import "./Description";

export default function Description(props) {
  return (
    <div>
      <Row>
        <h1>{props.city}</h1>
        <h4 id="description">{props.description}</h4>
        <h4 id="date">{props.date}</h4>
        <h4 className="current-temperature">{props.result}</h4>
      </Row>
    </div>
  );
}
