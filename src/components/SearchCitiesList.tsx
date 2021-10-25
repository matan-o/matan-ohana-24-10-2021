import React from "react";
import { dummyAutoCompleteResponse } from "../api/dummyData/autoComplete";
import httpWeatherService from "../services/HttpWeatherService";

const SearchCitiesList: React.FC = () =>{

    const locations = [...dummyAutoCompleteResponse]

    const onClickHandle = (locationKey:string) =>{
        // httpWeatherService.fiveDayForecasts(locationKey)
    }
   
    return(
        <div className="search-cities-list">
            {locations.map(location =>(
                <p onClick={()=>{onClickHandle(location.Key)}} className="city-found-name" key={location.LocalizedName}>{location.LocalizedName}</p>
            ))}
        </div>
    )
}

export default SearchCitiesList;