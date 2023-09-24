import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateType, NewsCardType } from "./types";
import { axiosApiInstance } from "../../api/axiosConfig";

const initialState: InitialStateType = {
    newsData: [],
    loading: false,
    error: null,
};

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (_, { dispatch, rejectWithValue }) => {
        try  {
        const result = await axiosApiInstance.get("");
        console.log("RESULT", result)
            dispatch(getNewsData(result.data.results));
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
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
            .addCase(fetchNews.fulfilled, (state) => {
                // state.newsData = action.payload;
                state.loading = false;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
});

export const { getNewsData } = newsSlice.actions;

export const newsDataReducer = newsSlice.reducer;