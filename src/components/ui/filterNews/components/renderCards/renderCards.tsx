import { useSelector } from "react-redux";
import { StoreType } from "../../../../../redux/store";
import { ErrorMessage } from "../../../../general/components/errorMessage/errorMessage";
import { NewsCard } from "../../../news/newsCard";
import { v4 as uuidv4 } from 'uuid';
import { Pagination } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { NewsCardType } from "../../../../../redux/reducers/newsDataReducer/types";
import { ThemeContext } from "../../../../../themeContext/themeContext";
import { ThemeContextType } from "../../../../../themeContext/types";
import { ContainerPagination } from "./styledRenderCards";

export const RenderCards = () => {

    const newsByCategory = useSelector((state: StoreType) => state.newsDataCards.newsDataByCategory);

    const visibleNews = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const [cards, setCards] = useState<Array<NewsCardType>>([]);
    const themeContext = useContext<ThemeContextType>(ThemeContext);

    useEffect(() => {
        const startIndex = (currentPage - 1) * visibleNews;
        const endIndex = currentPage * visibleNews;
        const cutCards = newsByCategory.slice(startIndex, endIndex)

        setCards(cutCards)
    }, [currentPage, newsByCategory])

    // console.log("CARDS", cards)

    return (
        <>
            {/* {error && <ErrorMessage errorText={error} />} */}
            {cards.map((item) => (
                < NewsCard key={uuidv4()} dataNews={item} />
            ))}
            <ContainerPagination
                themestyles={themeContext.themeStyles}>
                <Pagination
                    count={newsByCategory.length / visibleNews}
                    page={currentPage}
                    onChange={(event, page) => setCurrentPage(page)}
                    color="primary"
                    size="large"
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