import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ForecastItem from "./ForecastItem";
import { RootState } from "../store/reducers/root.reducer";
import { connect } from "react-redux";
import { Forecast } from "../api/models/DailyForecast";
import { City } from "../api/models/City";
import isFavorite from "../utils/isFavorite";
import { store } from "../store/RootStore";
import { favoriteStoreActions } from "../store/actions/favorite.actions";

interface Props {
  forecasts: Forecast | undefined;
  currentCity: City | null;
}

const Forecasts: React.FC<Props> = ({ forecasts, currentCity }) => {
  const [favorite, setFavorite] = useState(isFavorite(currentCity));

  useEffect(() => {
    setFavorite(isFavorite(currentCity));
  }, [currentCity]);

  const handleToggleFavorite = () => {
    if (!favorite) {
      setFavorite(true);
      store.dispatch(favoriteStoreActions.favoriteCityAdded(currentCity));
    } else {
      setFavorite(false);
      store.dispatch(favoriteStoreActions.favoriteCityRemoved(currentCity));
    }
  };

  return (
    <div className="forecasts ">
      {currentCity && (
        <div className="forecasts-top">
          <h2 className="city-name">{currentCity?.LocalizedName}</h2>
          <FontAwesomeIcon
            className={favorite ? "star-favorite" : "star"}
            icon={faStar}
            onClick={handleToggleFavorite}
          />
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
