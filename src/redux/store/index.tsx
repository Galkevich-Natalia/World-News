import { configureStore } from "@reduxjs/toolkit";
import { newsDataReducer } from "../reducers/newsDataReducer";

export const store = configureStore({
    reducer: newsDataReducer,
});

export type StoreType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;