import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import commonReducer from "./slice/common";
import userReducer from "./slice/user";

export function makeStore() {
  return configureStore({
    // 配置不同模块的 Reducer
    reducer: { common: commonReducer, user: userReducer },
  });
}

const store = makeStore();

export const dispatch = store.dispatch;
export const getState = store.getState;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
