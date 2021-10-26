import { City } from "../../api/models/City";
import { Forecast } from "../../api/models/DailyForecast";
import { StoreAction } from "./StoreAction";

export type WeatherActionType =
  | "WEATHER_FETCH_FORECAST_ASYNC"
  | "WEATHER_FETCH_FORECAST_FINISHED"
  | "WEATHER_FETCH_FORECAST_BY_CITY_KEY"
  ;

export interface WeatherAction extends StoreAction<WeatherActionType> {}

function weatherFetchForecastAsync(city: City): WeatherAction {
  return {
    type: "WEATHER_FETCH_FORECAST_ASYNC",
    payload: {
      city,
    },
  };
}

function weatherFetchForecastFinished(forecast: Forecast): WeatherAction {
  return {
    type: "WEATHER_FETCH_FORECAST_FINISHED",
    payload: {
      forecast,
    },
  };
}

function weatherFetchForecastByCityKeyAsync(cityKey: string): WeatherAction{
  return{
    type: "WEATHER_FETCH_FORECAST_BY_CITY_KEY",
    payload:{
      cityKey,
    }
  }
}

export const weatherStoreActions = {
  weatherFetchForecastAsync,
  weatherFetchForecastFinished,
  weatherFetchForecastByCityKeyAsync,
};
