import { NewsCardType } from "../../../../redux/reducers/types";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreType } from "../../../../redux/store";

interface NewsCardProps {
    dataNews: NewsCardType;
}

export const SingleNews = () => {

    const params = useParams();
    const { newsData, newsDataByCategory }  = useSelector((state: StoreType) => state);
    console.log("newsData", newsData)
    
    const allArrDataNews = [...newsData, ...newsDataByCategory]
    console.log("ALL_ARRAY", allArrDataNews)

    let findedNewsCard = allArrDataNews.find((item) => item.uri === params.uri)
    console.log("FINDED_CARD",findedNewsCard)
    return (
        <div>
            <h2>{findedNewsCard?.title}</h2>
            <img src={findedNewsCard?.image!}></img>
            <h3>{findedNewsCard?.body}</h3>
        </div>
    );
};