import React from "react";
import { CurrentCondition } from "../api/models/CurrentCondition";
import { getWeatherIcon } from "../utils/getWeatherIcon";

interface Props {
  data: CurrentCondition[];
}

const CurrentConditionItem: React.FC<Props> = (props) => {
  const location = props.data[0];

  return (
    <div className="location-item">
        <h4>City name</h4>
      <p>{location.WeatherText}</p>
      <img alt={location.WeatherText} src={getWeatherIcon(location.WeatherIcon)} />
      <p>
        {location.Temperature.Imperial.Value}
        {location.Temperature.Imperial.Unit}°
      </p>
    </div>
  );
};

export default CurrentConditionItem;
