import React from 'react';
import './WeatherInfo.css'; // Assuming you have a CSS file named WeatherInfo.css

const WeatherInfo = ({ data }:any) => {
  const { temperature, weatherDescription, sunrise, sunset, windSpeed, humidity, pressure } = data;

  // Format sunrise and sunset times
  const formattedSunrise = sunrise.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedSunset = sunset.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="weather-info">
      <div className="weather-temp">{temperature}°C</div>
      <div className="weather-description">{weatherDescription}</div>
      <div className="weather-sun-times">
        <span className="sunrise">🌅 {formattedSunrise}</span>
        <span className="sunset">🌇 {formattedSunset}</span>
      </div>
      <div className="weather-stats">
        <div className="wind-speed">💨 {windSpeed} m/s</div>
        <div className="humidity">💧 {humidity}%</div>
        <div className="pressure">🔵 {pressure} hPa</div>
      </div>
    </div>
  );
};

export default WeatherInfo;