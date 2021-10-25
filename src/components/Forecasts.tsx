import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dummyForecasts } from "../api/dummyData/forecasts";
import React, { useState } from "react";
import ForecastItem from "./ForecastItem";

const Forecasts: React.FC = () =>{

    const [forecasts, setForecasts] = useState(dummyForecasts);


    return(
        <div className="forecasts ">
        <div className="forecasts-top">
          <h2 className="city-name">City Name</h2>
          <button className="favorite-toggle">
            <FontAwesomeIcon icon={faStar}/>
          </button>
        </div>
        <div className="forecasts-bottom">
          <h3 className="headline-text">{forecasts.Headline.Text}</h3>
          <div className="fourcasts-cards">
            {forecasts &&
              forecasts.DailyForecasts.map((forecast) => (
                <ForecastItem key={forecast.EpochDate} data={forecast} />
              ))}
          </div>
        </div>
      </div>
    )
}

export default Forecasts;