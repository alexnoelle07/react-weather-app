import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherConversion from "./WeatherConversion";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="cityInfo text-center">
                <div className="row">
                    <div className="col-6">
                        <p id="today"><FormattedDate date={props.data.date} /></p>
                    </div>
                    <div className="col-6">
                        <p id="time"><FormattedTime time={props.data.date} /></p>
                    </div>
                </div>
                <h1 id="city">{props.data.city}</h1>
            </div>
            <div className="Temperature text-center">
                <div className="mainTemp">
                    <WeatherConversion fahrenheit={props.data.temperature} />
                </div>
            </div>
            <div className="weather-details">
                <div className="row">
                    <div className="col-6">
                        <div className="weatherIcon text-center">
                            <WeatherIcon code={props.data.icon} size={100}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li className="humidity">
                                Humidity: <span id="humidity">{props.data.humidity}</span>%
                            </li>
                            <li className="wind">
                                Wind: <span id="wind">{props.data.wind}</span>km/h
                            </li>
                            <li className="description">
                                {props.data.description}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}