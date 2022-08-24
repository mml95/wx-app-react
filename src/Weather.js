import React from "react";
import axios from "axios";
// import ReactDOM from "react-dom";
// import Cities from "./Cities";
// import Icon from "./Icon";
// import Date from "./Date";
// import Description from "./Description";
// import Feels from "./Feels";
// import forecast from "./Forecast";
// import Humidity from "./Humidity";
// import Temperature from "./Temperature";
// import Search from "./Search";
// import Wind from "./Wind";
import "./Weather.css";
import "./Styles.css";
import "./Footer.css";

export default function Weather() {
  let weatherData = {
    temperature: "90",
    city: "Austin",
    imgUrl: "",
    date: "Wed July 24, 1985",
    description: "Overcast",
    humidity: "80",
    feelsLike: "93",
    wind: "8",
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app">
          <header>
            <div className="row">
              <div className="col-md">
                <ul className="world-cities">
                  <li className="world-city">
                    <a href="/" className="city-color">
                      London
                    </a>
                  </li>
                  <li className="world-city">
                    <a href="/" className="city-color">
                      Tokyo
                    </a>
                  </li>
                  <li className="world-city">
                    <a href="/" className="city-color">
                      New York
                    </a>
                  </li>
                  <li className="world-city">
                    <a href="/" className="city-color">
                      Reykjavik
                    </a>
                  </li>
                  <li className="world-city">
                    <a href="/" className="city-color d-none d-md-inline">
                      Lagos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <section>
            <form className="float-left">
              <div className="row px-md-5">
                <div className="col-10">
                  <div className="search-bar">
                    <input
                      type="search"
                      placeholder="Find your city..."
                      autoFocus="on"
                      autoComplete="off"
                      className="form-control shadow-sm rounded-0"
                    />
                  </div>
                </div>
                <div className="col-2 p-0">
                  <input
                    className="d-none d-md-block form-control btn btn-light shadow-sm rounded-0 press-one"
                    type="submit"
                    value="Search"
                  />
                  <button
                    type="submit"
                    className="d-block d-md-none form-control btn btn-light shadow-sm rounded-0 mobile-search"
                  >
                    Find
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section>
            <div className="row px-5">
              <div className="col-md detail-block text-center">
                <div className="star-city">{weatherData.city}</div>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt=""
                  className="d-block current-emoji"
                  width="220"
                />
              </div>

              <div className="col-md text-center">
                <div className="current-focus-details">
                  <div className="clearfix weather-temperature">
                    <div className="float-right">
                      <span className="current-temp">
                        {weatherData.temperature}
                      </span>
                      <span className="units">
                        <a href="/" className="active fahrenheit-link">
                          °F
                        </a>
                        |
                        <a href="/" className="celsius-link">
                          °C
                        </a>
                      </span>
                      <ul className="current-details">
                        <li>{weatherData.date}</li>
                        <li>Feels Like: {weatherData.feelsLike}°</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} mph</li>
                        <li className="weather-description">
                          {weatherData.description}
                        </li>
                        <li>
                          <button
                            className="btn btn-light rounded-0 press-two"
                            type="click"
                          >
                            Current Location
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="weather-forecast text-center"></div>
          </section>
        </div>
      </div>
    </div>
  );
}