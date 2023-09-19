import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newsData: []
}

export const newsSlice = createSlice({
    name: "newsData",
    initialState,
    reducers: {}, 
});