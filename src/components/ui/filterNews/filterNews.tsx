import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreType } from "../../../redux/store";
import { ErrorMessage } from "../../general/components/errorMessage/errorMessage";
import { v4 as uuidv4 } from 'uuid';
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchNewsByCategory } from "../../../redux/reducers/newsDataReducer";
import { NewsCard } from "../news/newsCard";

export const FilterNews = () => {

    const newsByCategory = useSelector((state: StoreType) => state.newsDataByCategory);
    const { loading, error } = useSelector((state: StoreType) => state);

    const dispatch = useDispatch<AppDispatch>();
    const { category } = useParams();
    // console.log("NEWS BY Category", newsByCategory);
    // console.log("PARAMS", category)

    useEffect(() => {
        dispatch(fetchNewsByCategory(category!))
    }, [category]);

    if (loading) {
        return <CircularProgress color="secondary" />;
    };

    return (
        <div style={{minHeight:"31.7vw"}}>
            {error && <ErrorMessage errorText={error} />}
            {newsByCategory.map((item: any) => (
                < NewsCard key={uuidv4()} dataNews={item} />
            ))}
            
        </div>
    );
};