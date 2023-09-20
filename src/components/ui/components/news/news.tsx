import { useDispatch, useSelector } from "react-redux";
import { NewsCard } from "./newsCard";
import { AppDispatch, StoreType } from "../../../../redux/store";
import { getNewsData } from "../../../../redux/reducers/newsDataReducer";
import { useEffect } from "react";

export const News = () => {

    const news = useSelector((state: StoreType) => state.newsData); 
    const dispatch = useDispatch<AppDispatch>();

    const getNews = () => {
        fetch(`https://newsdata.io/api/1/news?apikey=pub_292815bf2785377c26ea1de22dd3cc066df8f&q=pizza`)
            .then((responce) => responce.json())
            .then((json) => dispatch(getNewsData(json.results)));
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <>
            <div>
                {news.map((item: any) => (
                    < NewsCard key={item.id} dataNews={item} />
                ))}
            </div>
        </>
    );
};