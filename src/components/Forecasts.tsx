import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ForecastItem from "./ForecastItem";
import { RootState } from "../store/reducers/root.reducer";
import { connect } from "react-redux";
import { Forecast } from "../api/models/DailyForecast";
import { City } from "../api/models/City";

interface Props {
  forecasts?: Forecast | undefined;
  currentCity?: City | null;
}

const Forecasts: React.FC<Props> = ({ forecasts, currentCity }) => {
  return (
    <div className="forecasts ">
      {currentCity && (
        <div className="forecasts-top">
          <h2 className="city-name">{currentCity?.LocalizedName}</h2>
            <FontAwesomeIcon className="favorite-toggle" icon={faStar} />
        </div>
      )}
      <div className="forecasts-bottom">
        <h3 className="headline-text">{forecasts?.Headline.Text}</h3>
        <div className="fourcasts-cards">
          {forecasts &&
            forecasts.DailyForecasts.map((forecast) => (
              <ForecastItem key={forecast.EpochDate} data={forecast} />
            ))}
        </div>
      </div>
    </div>
  );
};

const mapStateProps = (state: RootState) => {
  return {
    forecasts: state.weather.currentForecast,
    currentCity: state.city.currentCity,
  };
};

export default connect(mapStateProps)(Forecasts);
