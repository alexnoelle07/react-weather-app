import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description
        })
    }
    if (weatherData.ready) {
        return(
        <div className="Weather">
            <form>
                <div className="input-group">
                    <input type="search" className="form-control cityForm" placeholder="Enter a city" autoFocus="on"/>
                    <div className="input-group-append">
                        <button className="btn enterCity" type="button">Search</button>
                        <button className="btn submitCity" type="button"><i className="fa-solid fa-compass"></i></button>
                    </div>
                </div>
            </form>
            <div className="cityInfo text-center">
                <div className="row">
                    <div className="col-6">
                        <p id="today"><FormattedDate date={weatherData.date} /></p>
                    </div>
                    <div className="col-6">
                        <p id="time"><FormattedTime time={weatherData.date} /></p>
                    </div>
                </div>
                <h1 id="city">{weatherData.city}</h1>
            </div>
            <div className="Temperature text-center">
                <div className="mainTemp">
                    <div className="temperature-unit">{Math.round(weatherData.temperature)}</div>
                    <div className="conversion">
                        <button id="fahrenheit">°F</button>
                        <span className="break">|</span>
                        <button id="celsius">°C</button>
                    </div>
                </div>
            </div>
            <div className="weather-details">
                <div className="row">
                    <div className="col-6">
                    </div>
                    <div className="col-6">
                        <ul>
                            <li className="humidity">
                                Humidity: <span id="humidity">{weatherData.humidity}</span>%
                            </li>
                            <li className="wind">
                                Wind: <span id="wind">{weatherData.wind}</span>km/h
                            </li>
                            <li className="description">
                                {weatherData.description}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} else {
    const apiKey ="9be8f6893478d4ae7dcbe7d79fe4b147";
    let city = props.defaultCity;
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    }
}
    
    