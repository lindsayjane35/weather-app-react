import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "58a6775f97527351bf6c6966e209be39";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
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

  if (loaded) {
    return (
      <div className="Weather">
        <h2>{city}</h2>
        {form}

        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt={weather.description} />

            <span className="temperature">70°</span>
            <span className="unit">F | C</span>
          </div>

          <div className="col-6">
            <ul>
              <li>Temperature: {Math.round(weather.temperature)}°F</li>
              <li>Description: {weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
