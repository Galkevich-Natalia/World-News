import { configureStore } from "@reduxjs/toolkit";
import { newsSlice } from "../reducers/newsDataReducer";

export const store = configureStore({
    reducer: newsSlice.reducer
});