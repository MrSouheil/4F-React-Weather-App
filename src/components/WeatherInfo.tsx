import React from 'react';
import './WeatherInfo.css';

interface WeatherInfoProps {
  temperature: number;
  weatherCondition: string;
  sunrise: number;
  sunset: number;
  windSpeed: number;
  humidity: number;
  pressure: number;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  temperature,
  weatherCondition,
  sunrise,
  sunset,
  windSpeed,
  humidity,
  pressure
}) => {
  const formatTime = (unixTime: number) => new Date(unixTime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="weather-info">
      <div className="temperature">{temperature}°C</div>
      <div className="condition">{weatherCondition}</div>
      <div className="sun-times">
        <div className="sunrise">🌅 {formatTime(sunrise)}</div>
        <div className="sunset">🌇 {formatTime(sunset)}</div>
      </div>
      <div className="additional-info">
        <div className="wind">💨 {windSpeed} m/s N</div>
        <div className="humidity">💧 {humidity}%</div>
        <div className="pressure">🔵 {pressure} hPa</div>
      </div>
    </div>
  );
};

export default WeatherInfo;
