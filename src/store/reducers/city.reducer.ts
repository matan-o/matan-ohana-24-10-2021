import { DEFAULT_CITY } from './../../consts';
import { City } from "../../api/models/City";
import { CityAction } from "../actions/city.actions";

export interface CityState {
  cities: City[];
  currentCity: City | null;
}

const initialState: CityState = {
  cities: [],
  currentCity: DEFAULT_CITY,
};

export function CityReducer(
  state = initialState,
  action: CityAction
): CityState {
  switch (action.type) {
    case "CITY_SEARCH_FINISHED":
      return {
        ...state,
        cities: action.payload.cities,
      };
    case "CITY_SET_CURRENT":
      return{
        ...state,
        currentCity: action.payload.city
      }
    default:
      return state;
  }
}
