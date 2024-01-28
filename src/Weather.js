import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({});

  function handleReponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "58a6775f97527351bf6c6966e209be39";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleReponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-field"
        type="search"
        placeholder="Enter a city.."
        autoFocus="on"
        onChange={updateCity}
      />
      <button className="search-button" type="Submit">
        Search
      </button>
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h2>{city}</h2>
        {form}

        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />

            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°F | C</span>
          </div>

          <div className="col-6">
            <ul>
              <li className="FormattedDate">
                <FormattedDate date={weatherData.date} />
              </li>
              <li>Temperature: {Math.round(weatherData.temperature)}°F</li>
              <li>Description: {weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
