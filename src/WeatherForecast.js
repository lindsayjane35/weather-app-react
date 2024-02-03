import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-Day">Sat</div>
          <WeatherIcon code="01d" size={38} />
          <div className="d-flex justify-content-center">
            <div className="Forecast-Temp-High">70°F</div>
            <div className="Forecast-Temp-Low">50°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
