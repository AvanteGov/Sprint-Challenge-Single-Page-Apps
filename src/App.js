// importing functionality 
import React from "react";
import { Route} from "react-router-dom";


// importing components
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import NavComponent from "./components/NavComponent";
import LocationsList from "./components/LocationsList";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <WelcomePage />
      <NavComponent />
      <Route path="/location-list" component={() => {
        return (
          <LocationsList />
        )
      }} />
      <Route path="/character-list" component={() => {
        return (
          <CharacterList />
        )
      }} />
    </main>
  );
}
