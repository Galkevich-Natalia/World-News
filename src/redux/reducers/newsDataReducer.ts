import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialStateType, NewsCardType } from "./types";

const initialState: InitialStateType = {
    newsData: []
}

export const newsSlice = createSlice({
    name: "newsData",
    initialState,
    reducers: {
        getNewsData: (state, action: PayloadAction<Array<NewsCardType>>) => {
            state.newsData = action.payload;
        }
    }, 
});

export const { getNewsData } = newsSlice.actions;

export const newsDataReducer = newsSlice.reducer;