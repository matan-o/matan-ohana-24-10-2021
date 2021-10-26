import { DailyForecast, Forecast } from "../../api/models/DailyForecast";
import { WeatherAction } from "../actions/weather.actions";

export interface WeatherState {
  currentForecast?: Forecast ;
}

const initialState: WeatherState = {
};

export function WeatherReducer(
  state = initialState,
  action: WeatherAction
): WeatherState {
  switch (action.type) {
    case "WEATHER_FETCH_FORECAST_FINISHED":
      return {
        ...state,
        currentForecast: action.payload.forecast,
      };
    default:
      return state;
  }
}
