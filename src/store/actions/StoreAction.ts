export interface StoreAction<T> {
  type: T;
  payload?: any;
}
