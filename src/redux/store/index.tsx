import { configureStore } from "@reduxjs/toolkit";
import { newsDataReducer } from "../reducers/newsDataReducer/newsDataReducer";
import userReducer from "../reducers/userDataReducer/userDataReducer";

export const store = configureStore({
    reducer: {
        newsDataCards: newsDataReducer,
        userData: userReducer,
    }
});

export type StoreType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;