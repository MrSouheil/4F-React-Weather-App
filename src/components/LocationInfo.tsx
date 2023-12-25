import React from 'react';
import './LocationInfo.css'; // Assuming you have a CSS file named LocationInfo.css

const LocationInfo = ({ data }:any) => {
  const { name, country, currentTime, population } = data;

  // Format the current time to a readable format
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="location-info">
      <h2 className="location-name">{name}, {country}</h2>
      <p className="location-time">Current Time: {formattedTime}</p>
      <p className="location-population">Population: {population.toLocaleString()}</p>
    </div>
  );
};

export default LocationInfo;