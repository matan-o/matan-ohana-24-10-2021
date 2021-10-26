import React, { useEffect } from "react";
import SearchCities from "../components/search-cities/SearchCities";
import Forecasts from "../components/Forecasts";
import { DEFAULT_CITY} from "../consts";
import { store } from "../store/RootStore";
import { weatherStoreActions } from "../store/actions/weather.actions";

const Main: React.FC = () => {
  useEffect(() => {
    store.dispatch(
      weatherStoreActions.weatherFetchForecastByCityKeyAsync(DEFAULT_CITY.Key)
    );
  }, []);

  return (
    <div className="main">
      <h1>Main</h1>
      <SearchCities />
      <Forecasts />
    </div>
  );
};

export default Main;
