import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";



export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {

        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description
        })
    }
//accessing data from search engine
    function search() {
        const apiKey ="9be8f6893478d4ae7dcbe7d79fe4b147";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event) {
        event.preventDefault();
        if(city) {
            search(city);
        } else {
            alert('Please enter a city');
        }
    }
    function handleCityChange(event) {
        setCity(event.target.value);
    }

    //API call by geolocation

    function locationSearch(position) {
        let apiKey = "9be8f6893478d4ae7dcbe7d79fe4b147";
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }

    function getLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(locationSearch);
    }
  
    if (weatherData.ready) {
        return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input 
                        type="search" 
                        className="form-control cityForm" 
                        placeholder="Enter a city" 
                        autoFocus="on"
                        onChange={handleCityChange}/>
                    <div className="input-group-append">
                        <button className="btn enterCity" type="button" onClick={handleSubmit}>Search</button>
                        <button className="btn submitCity" type="button" onClick={getLocation}>Locate</button>
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
        </div>
    );
} else {
    search();
    return "Loading...";
    }
}


    
    