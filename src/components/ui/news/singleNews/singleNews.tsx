import { NewsCardType } from "../../../../redux/reducers/newsDataReducer/types";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreType } from "../../../../redux/store";
import { ContainerImg, ContainerSingleCard, Img, TextBody, TitleNews } from "./styledSingleNews";
import { useContext, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { ErrorMessage } from "../../../general/components/errorMessage/errorMessage";
import { ThemeContext } from "../../../../themeContext/themeContext";
import { ThemeContextType } from "../../../../themeContext/types";

interface NewsCardProps {
    dataNews: NewsCardType;
}

export const SingleNews = () => {

    const params = useParams();
    const { newsData, newsDataByCategory } = useSelector((state: StoreType) => state.newsDataCards);
    console.log("newsData", newsData)

    const { loading, error} = useSelector((state: StoreType) => state.newsDataCards);

    // console.log("ALL_ARRAY", allArrDataNews)

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

    if (loading) {
        return <CircularProgress color="secondary" />;
    };

    console.log("FINDED_CARD", findCard)
    return (
        <ContainerSingleCard>
            {error && <ErrorMessage errorText={error} />}
            {findCard ?
                <div>
                    <div>
                        <TitleNews themestyles={themeContext.themeStyles} >{findCard?.title}</TitleNews>
                    </div>
                    <ContainerImg>
                        <Img src={findCard?.image!}></Img>
                    </ContainerImg>
                    <div>
                        <TextBody themestyles={themeContext.themeStyles} >{findCard?.body}</TextBody>
                    </div>
                </div>
                : null
            }
        </ContainerSingleCard>
    );
};