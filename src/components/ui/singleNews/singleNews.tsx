import { NewsCardType } from "../../../redux/reducers/newsDataReducer/types";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreType } from "../../../redux/store";
import { ContainerImg, ContainerSingleCard, Img, TextBody, TitleNews } from "./styledSingleNews";
import { useContext, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { Loader } from "../../general/components/loader/loader";

interface NewsCardProps {
    dataNews: NewsCardType;
}

export const SingleNews = () => {

    const params = useParams();
    const { newsData, newsDataByCategory } = useSelector((state: StoreType) => state.newsDataCards);

    const [findCard, setFindCard] = useState<NewsCardType | null>(null);
    const themeContext = useContext<ThemeContextType>(ThemeContext);

    useEffect(() => {
        const allArrDataNews = [...newsData, ...newsDataByCategory]
        let findedNewsCard: NewsCardType | null | undefined = null;
        !findedNewsCard && (findedNewsCard = allArrDataNews.find((item) => item.uri === params.uri))

        if (findedNewsCard) {
            setFindCard(findedNewsCard);
        }
    }, [params, newsData, newsDataByCategory])

    return (
        <ContainerSingleCard>
            {findCard ?
                <>
                    <div>
                        <TitleNews themestyles={themeContext.themeStyles} >{findCard?.title}</TitleNews>
                    </div>
                    <ContainerImg>
                        <Img src={findCard?.image!}></Img>
                    </ContainerImg>
                    <div>
                        <TextBody themestyles={themeContext.themeStyles} >{findCard?.body}</TextBody>
                    </div>
                </>
                : < Loader />
            }
        </ContainerSingleCard>
    );
};