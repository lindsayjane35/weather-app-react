import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h3>
        <FormattedDate date={props.data.date} />
      </h3>

      <div className="current-grid">
        <div className="d-flex justify-content-center">
          <div className="icon">
            <WeatherIcon code={props.data.icon} size={85} />
          </div>
          <span>
            <WeatherTemperature fahrenheit={props.data.temperature} />
          </span>
        </div>

        <ul>
          <li className="text-capitalize">{props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li> Wind: {props.data.wind} mph</li>
        </ul>
      </div>
    </div>
  );
}
