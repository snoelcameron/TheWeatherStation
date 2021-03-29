import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./styles.css";
import Header from "./Header";
import Description from "./Description";
import FarenheitConversion from "./FarenheitConversion";
import WeatherIcon from "./WeatherIcon";
import Form from "./Form";
import Footer from "./Footer";

export default function App() {
  return (
    <Container>
      <div className="App">
        <Header />
        <Row>
          <Col>
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
          </Col>
          <Col>
            <WeatherIcon />
          </Col>
        </Row>
        <Form />
        <Footer />
      </div>
    </Container>
  );
}
