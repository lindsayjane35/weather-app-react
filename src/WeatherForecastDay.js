import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function highTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function lowTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="Forecast-Day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={38} />
      <div>
        <span className="Forecast-Temp-High">{highTemp()}</span>
        <span className="Forecast-Temp-Low">{lowTemp()}</span>
      </div>
    </div>
  );
}
