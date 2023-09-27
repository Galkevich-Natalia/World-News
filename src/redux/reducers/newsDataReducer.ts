import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateType, NewsCardType } from "./types";
import { axiosApiInstance } from "../../api/axiosConfig";

const initialState: InitialStateType = {
    newsData: [],
    newsDataByCategory: [],
    loading: false,
    error: null,
};

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (_, { dispatch, rejectWithValue }) => {
        try  {
        const result = await axiosApiInstance.get("/news?apikey=pub_292815bf2785377c26ea1de22dd3cc066df8f");
        console.log("RESULT", result)
            dispatch(getNewsData(result.data.results));
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchNewsByCategory = createAsyncThunk<void, string>(
    'news/fetchNewsByCategory',
    async (category, { dispatch, rejectWithValue }) => {
        try  {
        const result = await axiosApiInstance.get(`/news?apikey=pub_292815bf2785377c26ea1de22dd3cc066df8f&language=en&category=${category}`);
        console.log("RESULT", result)
            dispatch(getNewsDataByCategory(result.data.results));
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
        },
        getNewsDataByCategory: (state, action: PayloadAction<Array<NewsCardType>>) => {
            state.newsDataByCategory = action.payload;
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
            .addCase(fetchNewsByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNewsByCategory.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(fetchNewsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
});

export const { 
    getNewsData,
    getNewsDataByCategory
} = newsSlice.actions;

export const newsDataReducer = newsSlice.reducer;