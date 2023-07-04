import React from "react";
import "../index.css";
import Container from "@mui/material/Container";

export const Features = () => {
  return (
    
    <Container className="features-section">
      <Typography component="h2" variant="h3">Features</Typography>
      <div className="features-container">
        <div className="feature">
          <h3>Vehicle Emissions</h3>
          <p>
            Calculate the carbon footprint of different types of vehicles, from
            cars to motorcycles.
          </p>
        </div>
        <div className="feature">
          <h3>Flight Emissions</h3>
          <p>
            Estimate the carbon emissions from your flights, whether they're
            domestic or international.
          </p>
        </div>
        <div className="feature">
          <h3>Distance-Based Calculation</h3>
          <p>
            Enter a distance to calculate the CO2e of your carbon footprint.
            Ideal for planning trips and journeys.
          </p>
        </div>
      </div>
    </Container>
  );
};
