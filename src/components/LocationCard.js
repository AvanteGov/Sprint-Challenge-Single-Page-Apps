import React from "react";
import styled from "styled-components";

export default function LocationCard(props) {
  
  // console.log(props);
  
  const Card = styled.div `
    width: 80%;
    margin: 2% auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 3px solid lightgrey;
    border-radius: 25px;
  `
  
  return(
    <Card className="location-card">
      <h3 className="location-card__title">{props.location.name}</h3>
      <span className="location-card__info">{props.location.type}</span>
      <span className="locaion-card__info">{props.location.dimension}</span>
    </Card>
  )
   
}
