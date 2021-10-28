import React, { useEffect } from "react";
import SearchCities from "../components/search-cities/SearchCities";
import Forecasts from "../components/Forecasts";
import { DEFAULT_CITY} from "../consts";
import { store } from "../store/RootStore";
import { weatherStoreActions } from "../store/actions/weather.actions";
import { useLocation } from "react-router";


const Main: React.FC = () => {

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const keyQuery = query.get("key")

  useEffect(() => {
    let homeQuery = keyQuery ? keyQuery : DEFAULT_CITY.Key
    store.dispatch(
      weatherStoreActions.weatherFetchForecastByCityKeyAsync(homeQuery)
    );
  }, [keyQuery]);

  

  return (
    <div className="main">
      <SearchCities />
      <Forecasts />
    </div>
  );
};

export default Main;
