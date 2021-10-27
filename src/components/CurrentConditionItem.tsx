import React from "react";
import { CurrentCondition } from "../api/models/CurrentCondition";
import getWeatherIcon from "../utils/getWeatherIcon";

interface Props {
  data: CurrentCondition[];
  cityName: string;
}

const CurrentConditionItem: React.FC<Props> = ({data, cityName}) => {
  const location = data[0];

  return (
    <div className="location-item">
        <h4 className="city-name">{cityName}</h4>
      <p className="Weather-text">{location.WeatherText}</p>
      <img alt={location.WeatherText} src={getWeatherIcon(location.WeatherIcon)} />
      <p>
        {location.Temperature.Imperial.Value}
        {location.Temperature.Imperial.Unit}°
      </p>
    </div>
  );
};

export default CurrentConditionItem;
