import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";
import Header from "./Header";
import Description from "./Description";
import FarenheitConversion from "./FarenheitConversion";
import WeatherIcon from "./WeatherIcon";
import Form from "./Form";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App(city, description, date, temperature, result) {
  return (
    <div className="App">
      <Container>
        <Header />
        <Description
          city="Montreal"
          date="Saturday, March 27, 17:32"
          description="Sunny"
          humidity="20%"
          windspeed="9km/h"
        />
        <div className="FarenheitConversion">
          <FarenheitConversion temperature={26} />
        </div>
        <Col>
          <WeatherIcon />
        </Col>
        <Row>
          <Col>
            <Form />
          </Col>
        </Row>
        <Forecast />
        <Footer />
      </Container>
    </div>
  );
}
