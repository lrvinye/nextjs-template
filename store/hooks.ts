import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from ".";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// 分发dispatch reducer的hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
// 获取 state 当前值的hook
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
