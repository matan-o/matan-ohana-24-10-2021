import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { City } from "../api/models/City";
import { CurrentCondition } from "../api/models/CurrentCondition";
import { cityStoreActions } from "../store/actions/city.actions";
import { RootState } from "../store/reducers/root.reducer";
import { store } from "../store/RootStore";
import getWeatherIcon from "../utils/getWeatherIcon";

interface Props {
  data: CurrentCondition[];
  city: City;
  unit: "F" | "C";
}

const CurrentConditionItem: React.FC<Props> = ({ data, city, unit }) => {
  const location = data[0];
  let history = useHistory();

  const onLocationClick = () =>{
    store.dispatch(cityStoreActions.citySetCurrent(city))
    history.push(`/?key=${city.Key}`)
  }

  return (
    <div className="location-item" onClick={onLocationClick}>
      <h4 className="city-name">{city.LocalizedName}</h4>
      <p className="Weather-text">{location.WeatherText}</p>
      <img
        alt={location.WeatherText}
        src={getWeatherIcon(location.WeatherIcon)}
      />

      {unit === "F" && (
        <p className="temp">
          {location.Temperature.Imperial.Value}
          {location.Temperature.Imperial.Unit}°
        </p>
      )}
      {unit === "C" && (
        <p className="temp">
          {location.Temperature.Metric.Value}
          {location.Temperature.Metric.Unit}°
        </p>
      )}
    </div>
  );
};

const mapStateProps = (state: RootState) => {
  return {
    unit: state.unit.unit,
  };
};

export default connect(mapStateProps)(CurrentConditionItem);
