import { NewsCardType } from "../../../../redux/reducers/types";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreType } from "../../../../redux/store";
import { ContainerImg, ContainerSingleCard, Img, TextBody } from "./styledSingleNews";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { ErrorMessage } from "../../../general/components/errorMessage/errorMessage";

interface NewsCardProps {
    dataNews: NewsCardType;
}

export const SingleNews = () => {

    const params = useParams();
    const { newsData, newsDataByCategory } = useSelector((state: StoreType) => state);
    console.log("newsData", newsData)

    const { loading, error} = useSelector((state: StoreType) => state);

    // console.log("ALL_ARRAY", allArrDataNews)

    const [findCard, setFindCard] = useState<NewsCardType | null>(null);

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
                        <h1>{findCard?.title}</h1>
                    </div>
                    <ContainerImg>
                        <Img src={findCard?.image!}></Img>
                    </ContainerImg>
                    <div>
                        <TextBody>{findCard?.body}</TextBody>
                    </div>
                </div>
                : null
            }
        </ContainerSingleCard>
    );
};