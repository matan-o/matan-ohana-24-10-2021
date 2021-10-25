import React from "react";
import { DailyForecast } from "../api/models/DailyForecast";
import { dateToDay } from "../utils/dateFormat";
import { getWeatherIcon } from "../utils/getWeatherIcon";

interface Props{
    data: DailyForecast;
}


const ForecastItem: React.FC<Props> = (props) =>{

    const forecast = props.data;
    
    return(
        <div className="forecast-item">
                  <p>{dateToDay(forecast.Date)}</p>
                  <img
                    alt={forecast.Day.IconPhrase}
                    src={getWeatherIcon(forecast.Day.Icon)}
                  />
                  <label>{forecast.Day.IconPhrase}</label>
                  <p>
                    {forecast.Temperature.Minimum.Value} -{" "}
                    {forecast.Temperature.Maximum.Value}{" "}
                    {forecast.Temperature.Maximum.Unit}°
                  </p>
        </div>
    )
}

export default ForecastItem