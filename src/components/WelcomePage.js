import React from "react";
import styled from 'styled-components'


export default function WelcomePage() {
  
  const Image = styled.img `
    border-radius: 50px;
    margin: 0 auto;
  `
  
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />

      </header>
    </section>
  );
}
