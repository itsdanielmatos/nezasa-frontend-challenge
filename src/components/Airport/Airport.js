import React from 'react';
import './Airport.css';
import Maps from  './icons/maps.svg';

const Airport = ({name, iataCode, country, city, lat, lng}) => {
    return(
        <div className="Airport">
            <div className="Title">
                <label>{name}</label>
                <a target="_blank" href={`https://www.google.com/maps/?q=${lat},${lng}`}><img className="Maps" src={Maps} alt="Coordinates"/></a>
            </div>
            <div className="Content">
                <label className="Country">{country} <span className="City">{city}</span></label>
                <label className="Code">{iataCode}</label>
            </div>
        </div>
    )
}

export default Airport;