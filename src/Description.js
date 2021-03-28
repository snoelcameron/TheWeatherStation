import "./Description.css";

import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Description(props) {
  return (
    <div>
      <Row>
        <Col>
          <h1>{props.city}</h1>
          <h4 id="date">{props.date}</h4>
          <h4 id="description">{props.description}</h4>
          <h4 id="humidity">{props.humidity}</h4>
          <h4 id="windspeed">{props.windspeed}</h4>
        </Col>
      </Row>
    </div>
  );
}
