import React, { useState } from "react";
import "./App.css"; // Assuming you have an App.css for global styles
import SearchInput from "./components/SearchInput";
import LocationInfo from "./components/LocationInfo";
import WeatherInfo from "./components/WeatherInfo";

// const apiKey = "d94bcd435b62a031771c35633f9f310a";

type WeatherDetails = {
  temperature: number;
  weatherDescription: string;
  sunrise: Date;
  sunset: Date;
  windSpeed: number;
  humidity: number;
  pressure: number;
};

type CityDetails = {
  name: string;
  country: string;
  population: number;
  currentTime: Date;
};

const containerStyles = {
  display : 'flex',
  padding : '20px 20px',
  gap : '20px',
  'align-items' : 'center',
  'justify-content' : 'center',
}

const App = () => {
  const [locationData, setLocationData] = useState<CityDetails | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherDetails | null>(null); // Updated state initialization
  const [error, setError] = useState("");

  const fetchWeatherData = async (cityName: any) => {
    const apiKey = "d94bcd435b62a031771c35633f9f310a"; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&units=metric&cnt=7&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === "404") {
        setError("City not found");
        setLocationData(null);
        setWeatherData(null);
        return;
      }

      const cityDetails = {
        name: data.city.name,
        country: data.city.country,
        population: data.city.population,
        // Calculate current time using timezone offset
        currentTime: new Date(new Date().getTime() + data.city.timezone * 1000),
      };
      setLocationData(cityDetails);

      const firstDayData = data.list[0];
      const weatherDetails = {
        temperature: firstDayData.temp.day,
        weatherDescription: firstDayData.weather[0].description,
        sunrise: new Date(firstDayData.sunrise * 1000),
        sunset: new Date(firstDayData.sunset * 1000),
        windSpeed: firstDayData.speed,
        humidity: firstDayData.humidity,
        pressure: firstDayData.pressure,
      };
      setWeatherData(weatherDetails);
    } catch (error) {
      setError("Failed to fetch data");
    }
  };

  return (
    <div>
      <SearchInput onSearch={fetchWeatherData} />
      {error && <p>{error}</p>}
      <div className="weatherDetailsContainer" style={containerStyles}>
        {locationData && <LocationInfo data={locationData} />}
        {weatherData && <WeatherInfo data={weatherData} />}{" "}
      </div>
    </div>
  );
};

export default App;
