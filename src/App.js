import React from "react";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Description from "./Description";

export default function App() {
  return (
    <div className="App">
      <Container>
        <div class="header">The Weather Station</div>
        <div>
          <Description
            city="Montreal"
            date="Sunday, March 26, 8:00pm"
            description="Sunny"
            humidity="20%"
            windspeed="9km/h"
            Image="imageContainer"
          ></Description>
        </div>
      </Container>
    </div>
  );
}
