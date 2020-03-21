import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from "./LocationCard";
import SearchForm from "./LocationSearchForm"

export default function LocationsList() {

    const [locationData, setLocationData] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    // get search term through handler 

    const getSearchTerm = (searchTerm) => {
        setSearchInput(searchTerm);
    }

    console.log("search input:", searchInput)

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location")
            .then((response) => {
                // console.log(response.data.results);
                const searchResults = response.data.results.filter((responseItem) => {
                    return responseItem.name.toLowerCase().includes(searchInput)
                })
                // console.log("search results:", searchResults)
                // setLocationData(response.data.results);
                setLocationData(searchResults);
            })
            .catch((err) => {
                console.log("you got an error, Tex", err);
            })
    }, [searchInput])

    // console.log("location data:", locationData)

    return (
        <div className="locations-container">
            {locationData.map((location) => {
                return (
                    <LocationCard key={location.id} location={location} />
                )
            })}
            <SearchForm getSearchTerm={getSearchTerm} />
        </div>
    )
}
