import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchCitiesInput: React.FC = () =>{
    return(
      <div className="search-unit"> 
        <FontAwesomeIcon className="search-icon" icon={faSearch}/>
        <input
          type="text"
          className="search-input"
          placeholder="Enter city name"
        />
      </div>
        
    )
}

export default SearchCitiesInput;