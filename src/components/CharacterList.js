import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [ characterData, setCharacterData ] = useState([]);

  useEffect(() => {

    axios.get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        // console.log(response.data.results);
        setCharacterData(response.data.results);
      })
      .catch((err) => {
        console.log("you've got an error, Tex", err)
      })

  }, []);

  return (
    <section className="character-list">
      {characterData.map((character)=> {
        return (
          <CharacterCard key={character.id} character={character} />
        )
      })}
    </section>
  );
}
