import React, { useState } from "react";


const Search = (props) => { // This is a functional component. Capital letter by very important react convention, and a props object.
  const [searchValue, setSearchValue] = useState(""); // useState is a hook. It returns a state value and a function we can use to update it.

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
}

export default Search;