import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";
import SearchForm from "./CharacterSearchForm"

export default function CharacterList() {
  const [ characterData, setCharacterData ] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getSearchTerm = (searchTerm) => {
    setSearchInput(searchTerm);
  } 

  useEffect(() => {

    axios.get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        // console.log(response.data.results);
        const searchResults = response.data.results.filter((responseItem) => {
          return responseItem.name.toLowerCase().includes(searchInput)
      })
        // setCharacterData(response.data.results);
        setCharacterData(searchResults);
      })
      .catch((err) => {
        console.log("you've got an error, Tex", err)
      })

  }, [searchInput]);

  // creating filtering handler return 

  return (
    <section className="character-list">
      {characterData.map((character)=> {
        return (
          <CharacterCard key={character.id} character={character} />
        )
      })}
      <SearchForm getSearchTerm={getSearchTerm} />
    </section>
  );
}
