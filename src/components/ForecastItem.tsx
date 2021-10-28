import React from "react";
import { connect } from "react-redux";
import { DailyForecast } from "../api/models/DailyForecast";
import { RootState } from "../store/reducers/root.reducer";
import dateToDay from "../utils/dateFormat";
import getWeatherIcon from "../utils/getWeatherIcon";
import { fToC } from "../utils/unitConvert";

interface Props {
  forecast: DailyForecast;
  unit: "F" | "C";
}

const ForecastItem: React.FC<Props> = ({ forecast, unit }) => {
  const renderTemperature = () => {
    const max =
      unit === "F"
        ? forecast.Temperature.Maximum.Value
        : fToC(forecast.Temperature.Maximum.Value);

    const min =
      unit === "F"
        ? forecast.Temperature.Minimum.Value
        : fToC(forecast.Temperature.Minimum.Value);
    return (
      <p className="temp">
        {min} - {max} {unit}°
      </p>
    );
  };

  
  
  return (
    <div className="forecast-item">
      <p className="day">{dateToDay(forecast.Date)}</p>
      <img
        alt={forecast.Day.IconPhrase}
        src={getWeatherIcon(forecast.Day.Icon)}
      />
      <label>{forecast.Day.IconPhrase}</label>
      {renderTemperature()}
    </div>
  );
};

const mapStateProps = (state: RootState) => {
  return {
    unit: state.unit.unit,
  };
};

export default connect(mapStateProps)(ForecastItem);
