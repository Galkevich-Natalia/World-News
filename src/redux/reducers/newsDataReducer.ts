import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateType, NewsCardType } from "./types";

const initialState: InitialStateType = {
    newsData: [],
    loading: false,
    error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews',
    async (_, { dispatch, rejectWithValue }) => {
        return fetch(`https://newsdata.io/api/1/news?apikey=pub_292815bf2785377c26ea1de22dd3cc066df8f&`)
            .then((responce) => responce.json())
            .then((res) => res.results)
            .catch((err) => rejectWithValue(err.message));
        }
    );

export const newsSlice = createSlice({
    name: "newsData",
    initialState,
    reducers: {
        getNewsData: (state, action: PayloadAction<Array<NewsCardType>>) => {
            state.newsData = action.payload;
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.newsData = action.payload;
                state.loading = false;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
});

export const { getNewsData } = newsSlice.actions;

export const newsDataReducer = newsSlice.reducer;