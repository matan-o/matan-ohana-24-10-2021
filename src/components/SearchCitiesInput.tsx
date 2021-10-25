import React from "react";

const SearchCitiesInput: React.FC = () =>{
    return(
        <input
          type="text"
          className="search-input"
          placeholder="Enter city name"
        />
    )
}

export default SearchCitiesInput;