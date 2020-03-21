import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import NavComponent from "./components/NavComponent";

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <WelcomePage />
      <NavComponent />
    </main>
  );
}
