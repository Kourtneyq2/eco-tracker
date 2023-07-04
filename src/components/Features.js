import React from "react";
import "../index.css";
import Stack from "@mui/material/Stack";

export const Features = () => {
  return (
    
    <Container className="features-section">
      <Typography component="h2" variant="h3">Features</Typography>
      <Stack className="features-container">
        <div className="feature">
          <Typography component="h3" variant="h3">Vehicle Emissions</Typography>
          <p>
            Calculate the carbon footprint of different types of vehicles, from
            cars to motorcycles.
          </p>
        </div>
        <div className="feature">
          <Typography component="h3" variant="h3">Flight Emissions</Typography>
          <p>
            Estimate the carbon emissions from your flights, whether they're
            domestic or international.
          </p>
        </div>
        <div className="feature">
          <Typography component="h3" variant="h3">Distance-Based Calculation</Typography>
          <p>
            Enter a distance to calculate the CO2e of your carbon footprint.
            Ideal for planning trips and journeys.
          </p>
        </div>
      </Stack>
    </Container>
  );
};
