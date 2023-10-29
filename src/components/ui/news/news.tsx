import { useSelector } from "react-redux";
import { NewsCard } from "../../general/components/newsCard/newsCard";
import { v4 as uuidv4 } from 'uuid';
import { StoreType } from "../../../redux/store";
import { ContainerNews, WrapperNews } from "./styledNews";
import { Loader } from "../../general/components/loader/loader";

export const News = () => {

    const news = useSelector((state: StoreType) => state.newsDataCards.newsData);
    const { loading } = useSelector((state: StoreType) => state.newsDataCards);

    const cutNews = news.slice(0, 10);

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