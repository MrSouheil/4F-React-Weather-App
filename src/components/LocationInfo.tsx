import React from 'react';
import './LocationInfo.css';

interface LocationInfoProps {
  name: string;
  country: string;
  population: number;
  date: string;
}

const LocationInfo: React.FC<LocationInfoProps> = ({ name, country, population, date }) => {
  return (
    <div className="location-info">
      <h1 className="location-name">{name}, {country}</h1>
      <h2 className="location-date">{date}</h2>
      <h3 className="location-population">Population: {population.toLocaleString()}</h3>
    </div>
  );
};

export default LocationInfo;