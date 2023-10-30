import { useSelector } from "react-redux";

import { NewsCard } from "../../general/components/newsCard/newsCard";
import { StoreType } from "../../../redux/store";
import { v4 as uuidv4 } from 'uuid';
import { Loader } from "../../general/components/loader/loader";

import { ContainerNews, WrapperNews } from "./styledNews";


export const News = () => {

    const news = useSelector((state: StoreType) => state.newsDataCards.newsData);
    const { loading } = useSelector((state: StoreType) => state.newsDataCards);

    const cutNews = news.slice(0, 16);

    return (
        <ContainerNews>
            <WrapperNews>
                {loading ?
                    < Loader />
                    : cutNews.map((item) => (
                        < NewsCard key={uuidv4()} dataNews={item} className="homeCard" />
                    ))
                }
            </WrapperNews>
        </ContainerNews>
    );
};