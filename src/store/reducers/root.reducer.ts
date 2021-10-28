import { FavoriteReducer, FavoriteState } from "./favorite.reducer";
import { combineReducers } from "redux";

import { CityReducer, CityState } from "./city.reducer";
import { WeatherReducer, WeatherState } from "./weather.reducer";
import { unitReducer, UnitState } from "./unit.reducer";

export interface RootState {
  city: CityState;
  weather: WeatherState;
  favorite: FavoriteState;
  unit: UnitState;

}

export const rootReducer = combineReducers<RootState>({
  city: CityReducer,
  weather: WeatherReducer,
  favorite: FavoriteReducer,
  unit: unitReducer
});
