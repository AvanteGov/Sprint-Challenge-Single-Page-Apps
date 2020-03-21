import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from "./LocationCard";

export default function LocationsList() {

    const [ locationData, setLocationData ] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location")
            .then((response) => {
                // console.log(response.data.results);
                setLocationData(response.data.results);
            })
            .catch((err) =>{
                console.log("you got an error, Tex", err);
            })
    }, [])


    return(
        <div className="locations-container">
            {locationData.map((location) => {
                return (
                    <LocationCard key={location.id} location={location} />
                )
            })}
        </div>
    )
}
