import { City } from "../../api/models/City";
import { StoreAction } from "./StoreAction";

export type CityActionType = "CITY_SEARCH_ASYNC" | "CITY_SEARCH_FINISHED" | "CITY_SET_CURRENT";

export interface CityAction extends StoreAction<CityActionType> {}

function citySearchAsync(term: string): CityAction {
  return {
    type: "CITY_SEARCH_ASYNC",
    payload: {
      term,
    },
  };
}

function citySearchFinished(cities: City[]): CityAction {
  return {
    type: "CITY_SEARCH_FINISHED",
    payload: {
      cities,
    },
  };
}

function citySetCurrent(city: City): CityAction{
  return{
    type:"CITY_SET_CURRENT",
    payload:{
      city
    }
  }
}

export const cityStoreActions = {
  citySearchAsync,
  citySearchFinished,
  citySetCurrent,
};
