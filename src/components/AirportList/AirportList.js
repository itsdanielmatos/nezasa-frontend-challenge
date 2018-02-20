import React from 'react';
import Airport from '../Airport/Airport.js'
import './AirportList.css';

const AirportList = ({airports, filter, search}) => {
    const getAirports = (airports) => {
        var currentAirports = airports;

        if(filter){
            currentAirports = currentAirports.filter((airport) => {
                return airport[filter].toLowerCase().includes(search.toLowerCase());    
            });
        }

        if (!currentAirports.length) {
            return <label className="No-Results">No results match your search criteria</label>
        }

        return currentAirports.map((airport) => {
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