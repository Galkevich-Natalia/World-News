import { useDispatch, useSelector } from "react-redux";
import { NewsCard } from "./newsCard";
import { AppDispatch, StoreType } from "../../../../redux/store";
import { fetchNews } from "../../../../redux/reducers/newsDataReducer";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CircularProgress } from "@mui/material";
import { ErrorMessage } from "../../../general/components/errorMessage/errorMessage";

export const News = () => {

    const news = useSelector((state: StoreType) => state.newsData); 
    const {loading, error} = useSelector((state: StoreType) => state);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchNews());
    }, []);

    if (loading) {
        return <CircularProgress color="secondary" />;
    };

    return (
        <div>
            {error && <ErrorMessage errorText={error} />}
            {news.map((item: any) => (
                < NewsCard key={uuidv4()} dataNews={item} />
            ))}
        </div>
    );
};