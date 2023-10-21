import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreType } from "../../../redux/store";


import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchNewsByCategory } from "../../../redux/reducers/newsDataReducer";
import { RenderCards } from "./components/renderCards/renderCards";

export const FilterNews = () => {
    const { loading } = useSelector((state: StoreType) => state);

    const dispatch = useDispatch<AppDispatch>();
    const { category } = useParams();

    useEffect(() => {
        dispatch(fetchNewsByCategory(category!))
    }, [category]);

    return (
        <div style={{ minHeight: "31.7vw" }}>
            {loading ?
                <CircularProgress color="secondary" />
                : < RenderCards />
            }
        </div >
    );
};