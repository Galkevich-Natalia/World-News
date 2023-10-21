import { useSelector } from "react-redux";
import { StoreType } from "../../../../../redux/store";
import { ErrorMessage } from "../../../../general/components/errorMessage/errorMessage";
import { NewsCard } from "../../../news/newsCard";
import { v4 as uuidv4 } from 'uuid';
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { NewsCardType } from "../../../../../redux/reducers/types";

export const RenderCards = () => {

    const newsByCategory = useSelector((state: StoreType) => state.newsDataByCategory);

    const visibleNews = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const [cards, setCards] = useState<Array<NewsCardType>>([]);

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
            <div style={{ display: "flex", justifyContent: "center", margin: "60px 0 40px 0" }}>
                <Pagination count={newsByCategory.length / visibleNews}
                    page={currentPage}
                    onChange={(event, page) => setCurrentPage(page)}
                    color="primary"
                    size="large"
                />
            </div>
        </>
    );
};