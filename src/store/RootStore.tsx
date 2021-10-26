import React from "react";

import { Provider } from "react-redux";
import {
  createStore,
  applyMiddleware,
  EmptyObject,
  AnyAction,
  Store,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer, RootState } from "./reducers/root.reducer";
import { rootSaga } from "./sagas/root.saga";

export type RootStoreProps = Store<EmptyObject & RootState, AnyAction>;

const sagaMiddleware = createSagaMiddleware();
export const store: RootStoreProps = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const RootStore = (props: any) => {
  return <Provider store={store}>{props.children}</Provider>;
};
