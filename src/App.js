import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="San Francisco"/>
      <footer>
        This project was coded by Alex Noelle and is {""}
      <a href="https://github.com/alexnoelle07/react-weather-app"target="noreferrer">open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
