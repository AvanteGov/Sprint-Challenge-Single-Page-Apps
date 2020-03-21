import React, { useState } from "react";


export default function SearchForm(props) {
 
  // console.log(props)

  // state to handle input change 

  const [ searchTerm, setSearchTerm ] = useState("")
  
  // handles the storage of the search term
  const handleChange = event => {
    
    setSearchTerm(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault()
    props.getSearchTerm(searchTerm);
  }
  // submit handler that takes the function from the fitler in the parent 
  



  return (
    <form onSubmit={submitHandler} className="search-form">
        <label htmlFor="name-id" className="search-form__label">Search:</label>
        <input 
          className="search-form__input"
          placeholder="Search Terms"
          type="text"
          id="search-form-id"
          name="name"
          value={searchTerm}
          onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
    </form>
  );
}
