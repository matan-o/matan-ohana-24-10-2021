import { combineReducers } from "redux";

import { CityReducer, CityState } from "./city.reducer";
import { WeatherReducer, WeatherState } from "./weather.reducer";

export interface RootState {
  city: CityState;
  weather: WeatherState;
}

export const rootReducer = combineReducers<RootState>({
  city: CityReducer,
  weather: WeatherReducer,
});
