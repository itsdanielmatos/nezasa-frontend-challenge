import React from 'react';
import Airport from '../Airport/Airport.js'
import './AirportList.css';

const AirportList = ({airports}) => {
    const getAirports = (airports) => {
        if (!airports) {
            return <label className="No-Results">No results match your search criteria</label>
        }

        return airports.map((airport) => {
            return (
                <Airport key={airport.refId} name={airport.name} iataCode={airport.iataCode} country={airport.country} city={airport.city} lat={airport.coordinate.lat} lng={airport.coordinate.lng}/>
            )
        })
    }

    return (
        <div className="AirportList">
            {getAirports(airports)}
        </div>
    )
};

export default AirportList;