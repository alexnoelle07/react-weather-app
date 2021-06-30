import React from "react";
import "./Weather.css";

export default function Weather() {

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
                        <p id="today">Saturday May 4, 2021</p>
                    </div>
                    <div className="col-6">
                        <p id="time">17:00</p>
                    </div>
                </div>
                <h1 id="city">San Francisco</h1>
            </div>
            <div className="Temperature text-center">
                <div className="mainTemp">
                    <div className="temperature-unit">59</div>
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
                                Humidity: <span id="humidity">40</span>%
                            </li>
                            <li className="wind">
                                Wind: <span id="wind">8</span>km/h
                            </li>
                            <li className="description">
                                Clear
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}