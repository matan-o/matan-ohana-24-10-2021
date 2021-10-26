import { put, takeLatest, call } from "redux-saga/effects";
import httpWeatherService from "../../services/HttpWeatherService";
import { cityStoreActions } from "../actions/city.actions";
import {
  WeatherAction,
  WeatherActionType,
  weatherStoreActions,
} from "../actions/weather.actions";

export function* handleFetchForecast(action: WeatherAction): any {
  yield put(cityStoreActions.citySetCurrent(action.payload.city));
  const forecast = yield call(
    httpWeatherService.fiveDayForecasts,
    action.payload.city.Key
  );
  yield put(weatherStoreActions.weatherFetchForecastFinished(forecast));
}

export function* handleFetchForecastByCityKey(action: WeatherAction): any {
  const forecast = yield call(
    httpWeatherService.fiveDayForecasts,
    action.payload.cityKey
  );
  yield put(weatherStoreActions.weatherFetchForecastFinished(forecast));
}

export default function* rootWeatherSaga() {
  yield takeLatest<WeatherActionType>(
    "WEATHER_FETCH_FORECAST_ASYNC",
    handleFetchForecast
  );
  yield takeLatest<WeatherActionType>(
    "WEATHER_FETCH_FORECAST_BY_CITY_KEY",
    handleFetchForecastByCityKey
  );
}
