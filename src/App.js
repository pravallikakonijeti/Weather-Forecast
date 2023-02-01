import React, { useState, useEffect } from "react";
import "./App.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const fetchWeather = async (city) => {
    const apiKey = "c8b8bb8d44a967bc173ed95b227419fd";
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const data = await response.json();
    setWeather(data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };
  
  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  return (
 
  
    <div className="weather-app">
         <header className="nav-bar">
    <h1 className="logo">Weather App</h1>
    <nav className="nav-links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
 </header>
     
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {weather.main && (
        <div className="weather-details">
          <p>Temperature: {weather.main.temp}</p>
          <p>Humidity: {weather.main.humidity}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
