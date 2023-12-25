import React, { useState } from 'react';
import './SearchInput.css'; // Assuming you have a CSS file named SearchInput.css

const SearchInput = ({ onSearch }:any) => {
  const [cityName, setCityName] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault();
    if (cityName.trim()) {
      onSearch(cityName.trim());
      setCityName(''); // Reset input after search
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter city name"
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchInput;