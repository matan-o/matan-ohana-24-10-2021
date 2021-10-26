import { put, takeLatest, call } from "redux-saga/effects";
import { City } from "../../api/models/City";
import cityService from "../../services/CityService";
import { CityAction, CityActionType, cityStoreActions } from "../actions/city.actions";

export function* handleSearchCities(action: CityAction): any {
  const cities : City[] = yield call(cityService.findCities, action.payload.term);
  yield put(cityStoreActions.citySearchFinished(cities));
}

export default function* rootCitySaga() {
  yield takeLatest<CityActionType>("CITY_SEARCH_ASYNC", handleSearchCities);
}
