
import React, { useState } from "react";

export default function WeatherConversion(props) {
    const [unit, setUnit] = useState("fahrenheit");
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if (unit === 'fahrenheit') {
    return (
        <div className="WeatherTemperature">
        <div className="temperature-unit">{Math.round(props.fahrenheit)}</div>
        <div className="conversion">
            <button id="fahrenheit">°F</button>
            <span className="break">|</span>
            <button id="celsius" onClick={convertToCelsius}>°C</button>
            </div>
            </div>
    )
    } else {
        let celsius = (props.fahrenheit - 32) * 5/9;
        return (
            <div className="WeatherTemperature">
        <div className="temperature-unit">{Math.round(celsius)}</div>
        <div className="conversion">
            <button id="fahrenheit" onClick={convertToFahrenheit}>°F</button>
            <span className="break">|</span>
            <button id="celsius">°C</button>
            </div>
            </div>
        )
    }
}