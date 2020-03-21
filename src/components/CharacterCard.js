import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  
  // console.log(props)

  const Card = styled.div `
    width: 80%;
    margin: 2% auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 3px solid lightgrey;
    border-radius: 25px;
  `

  // name, status, species, gender 

  return (
    <Card className="character-card">
      <h3 className="character-card__title">{props.character.name}</h3>
      {/* <span className="character-card__info">{props.character.status}</span> */}
      <span className="character-card__info">{props.character.species}</span>
      <span className="character-card__info">{props.character.gender}</span>
    </Card>
  )
}
