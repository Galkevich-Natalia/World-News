import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreType } from "../../../redux/store";


import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchNewsByCategory } from "../../../redux/reducers/newsDataReducer/newsDataReducer";
import { RenderCards } from "./components/renderCards/renderCards";
import { Container } from "./styledFilterNews";
import { Loader } from "components/general/components/loader/loader";

export const FilterNews = () => {
    const { loading } = useSelector((state: StoreType) => state.newsDataCards);

    const dispatch = useDispatch<AppDispatch>();
    const { category } = useParams();

    useEffect(() => {
        dispatch(fetchNewsByCategory(category!))
    }, [category]);

    return (
        <Container>
            {loading ?
                < Loader />
                : < RenderCards />
            }
        </Container>
    );
};