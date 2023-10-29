import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RenderCards } from "./components/renderCards/renderCards";
import { fetchNewsByCategory } from "../../../redux/reducers/newsDataReducer/newsDataReducer";
import { AppDispatch, StoreType } from "../../../redux/store";
import { Loader } from "../../general/components/loader/loader";

import { Container } from "./styledFilterNews";


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