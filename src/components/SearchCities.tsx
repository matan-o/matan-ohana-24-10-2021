import React from "react";
import SearchCitiesInput from "./SearchCitiesInput";
import SearchCitiesList from "./SearchCitiesList";

const SearchCities: React.FC = () =>{
    return(
        <div className="search-bar">
          <SearchCitiesInput/>
          <SearchCitiesList/>
      </div>            
    )
}

export default SearchCities;