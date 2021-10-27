import { favoriteReducer, FavoriteState } from './favorite.reducer';
import { combineReducers } from "redux";

import { CityReducer, CityState } from "./city.reducer";
import { WeatherReducer, WeatherState } from "./weather.reducer";

export interface RootState {
  city: CityState;
  weather: WeatherState;
  favorite: FavoriteState

}

export const rootReducer = combineReducers<RootState>({
  city: CityReducer,
  weather: WeatherReducer,
  favorite: favoriteReducer
});
