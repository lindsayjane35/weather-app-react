import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "58a6775f97527351bf6c6966e209be39";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

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
