import { useSelector } from "react-redux";
import { StoreType } from "../../../../../redux/store";
import { NewsCard } from "../../../../general/components/newsCard/newsCard";
import { v4 as uuidv4 } from 'uuid';
import { Pagination } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { NewsCardType } from "../../../../../redux/reducers/newsDataReducer/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ContainerCards, ContainerPagination } from "./styledRenderCards";

export const RenderCards = () => {

    const newsByCategory = useSelector((state: StoreType) => state.newsDataCards.newsDataByCategory);

    const visibleNews = 15;
    const countPages = Math.round(newsByCategory.length / visibleNews);
    const [currentPage, setCurrentPage] = useState(1);

    const [cards, setCards] = useState<Array<NewsCardType>>([]);
    const themeContext = useContext<ThemeContextType>(ThemeContext);

    useEffect(() => {
        const startIndex = (currentPage - 1) * visibleNews;
        const endIndex = currentPage * visibleNews;
        const cutCards = newsByCategory.slice(startIndex, endIndex)

        setCards(cutCards)
    }, [currentPage, newsByCategory])

    return (
        <>
            <ContainerCards>
                {cards.map((item) => (
                    < NewsCard key={uuidv4()} dataNews={item} />
                ))}
            </ContainerCards>
            <ContainerPagination
                themestyles={themeContext.themeStyles}>
                <Pagination
                    count={countPages}
                    page={currentPage}
                    onChange={(event, page) => setCurrentPage(page)}
                    color="primary"
                    size="medium"
                    sx={{
                        '& .MuiPaginationItem-page, & .MuiPaginationItem-ellipsis, & .MuiPaginationItem-previousNext': {
                            color: themeContext.themeStyles.color
                        },
                    }}
                />
            </ContainerPagination>
        </>
    );
};