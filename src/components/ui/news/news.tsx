import { useSelector } from "react-redux";
import { NewsCard } from "./newsCard";
import { v4 as uuidv4 } from 'uuid';
import { CircularProgress, Link } from "@mui/material";
import { StoreType } from "../../../redux/store";
import { ErrorMessage } from "../../general/components/errorMessage/errorMessage";
import { ContainerNews, WrapperNews } from "./styledNews";

export const News = () => {

    const news = useSelector((state: StoreType) => state.newsDataCards.newsData);
    const { loading, error } = useSelector((state: StoreType) => state.newsDataCards);

    if (loading) {
        return <CircularProgress color="secondary" />;
    };

    return (
        <ContainerNews>
            <WrapperNews>
                {/* {error && <ErrorMessage errorText={error} />} */}
                {news.map((item: any) => (
                    < NewsCard key={uuidv4()} dataNews={item} className="homeCard"/>
                ))}
            </WrapperNews>
        </ContainerNews>
    );
};