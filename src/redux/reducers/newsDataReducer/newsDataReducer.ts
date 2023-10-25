import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateType, NewsCardType } from "./types";
import { axiosApiInstance } from "../../../api/axiosConfig";


const initialState: InitialStateType = {
    newsData: [],
    newsDataByCategory: [],
    loading: false,
    error: null,
};

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const result = await axiosApiInstance.post("", {
                query: {
                    $query: {
                        lang: 'eng',
                    },
                    $filter: {
                        forceMaxDataTimeWindow: '31',
                    },
                },
                "resultType": "articles",
                "articlesSortBy": "date",
                "includeArticleImage": true,
                "includeArticleEventUri": true,
                "articlesCount": 100,
                "apiKey": "2782e2f9-852f-4e1c-9217-b17e3891a085"
            });
            console.log("RESULT", result.data.articles.results)
            const filteredNews = result.data.articles.results
                .filter((item: NewsCardType) => item.image !== null)
                .filter((element: NewsCardType, index: number, array: NewsCardType[]) => array.findIndex((el: NewsCardType) => el.title === element.title) === index);
            console.log("FilteredNews", filteredNews)
            dispatch(getNewsData(filteredNews));
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchNewsByCategory = createAsyncThunk<void, string>(
    'news/fetchNewsByCategory',
    async (category, { dispatch, rejectWithValue }) => {
        try {
            const result = await axiosApiInstance.post("", {
                query: {
                    $query: {
                        lang: 'eng',
                        categoryUri: `dmoz/${category}`
                    },
                    $filter: {
                        forceMaxDataTimeWindow: '31',
                        isDuplicate: "skipDuplicates"
                    },
                },
                "resultType": "articles",
                "articlesSortBy": "date",
                "includeArticleCategories": true,
                "includeArticleImage": true,
                "articlesCount": 100,
                "apiKey": "2782e2f9-852f-4e1c-9217-b17e3891a085"
            });
            console.log("RESULT-Category", result)
            const filteredNews = result.data.articles.results
                .filter((item: NewsCardType) => item.image !== null)
                .filter((element: NewsCardType, index: number, array: NewsCardType[]) => array.findIndex((el: NewsCardType) => el.title === element.title) === index);
            console.log("FilteredCategoryNews", filteredNews)
            dispatch(getNewsDataByCategory(filteredNews));
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