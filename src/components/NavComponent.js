import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

    
const NavComponent = () => {

    const NavContainer = styled.div `
        width: 80%;
        margin: 2% auto;
        display: flex;
        justify-content: space-around;
    `

    return (
        <NavContainer className="nav-container">
            <Link to="/location-list">
                <h2 className="nav-container__link">LOCATIONS</h2>
            </Link>
            <Link to="/character-list">
                <h2 className="nav-container__link">CHARACTERS</h2>
            </Link>
        </NavContainer>
    )
}



export default NavComponent