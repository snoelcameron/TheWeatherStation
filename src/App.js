import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";
import Form from "./Form";
import Description from "./Description";
import Forecast from "./Forecast";
import Image from "./Image";
import ConditionsList from "./ConditionsList";

export default function App(
  city,
  description,
  date,
  temperature,
  measure,
  result
) {
  return (
    <div className="App">
      <Container>
        <Description
          city="Montreal"
          date="Sunday, March 26, 8:00pm"
          description="Sunny"
        />
        <ConditionsList measure="Conditions" result="20°" />
        <ConditionsList measure="Humidity" result="20%" />
        <ConditionsList measure="Wind Speed" result="9km/h" />
        <div className="forecast">
          <Forecast temperature={26} />
        </div>

        <Row>
          <Col>
            <Image />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
