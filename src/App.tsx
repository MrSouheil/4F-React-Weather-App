import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import LocationInfo from "./components/LocationInfo";
import WeatherInfo from "./components/WeatherInfo";

const App: React.FC = () => {
  const [locationData, setLocationData] = useState<any>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeatherData = async (cityName: string) => {
    const apiKey = "d94bcd435b62a031771c35633f9f310a";
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&units=metric&cnt=7&appid=${apiKey}`;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setLocationData(data.city);
        setWeatherData(data.list);
      } else {
        throw new Error(data.message || "Error fetching weather data");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchedCity: string) => {
    fetchWeatherData(searchedCity);
  };

  const formatDate = (dateString: number) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString * 1000).toLocaleDateString(undefined, options);
  };

  return (
    <div className="App">
      <SearchInput onSearch={handleSearch} />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      {locationData?.list?.[0] && (
        <LocationInfo
          name={locationData.name}
          country={locationData.country}
          population={locationData.population}
          date={formatDate(locationData.list[0].dt)}
        />
      )}

      {weatherData && weatherData.length > 0 && (
        <WeatherInfo {...weatherData[0]} />
      )}
    </div>
  );
};

export default App;
