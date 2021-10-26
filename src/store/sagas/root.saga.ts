import { all, call, spawn } from "redux-saga/effects";
import rootCitySaga from "./city.saga";
import rootWeatherSaga from "./weather.saga";

export function* rootSaga() {
  const sagas: any = [rootCitySaga, rootWeatherSaga];
  yield all(
    sagas.map((saga: any) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
