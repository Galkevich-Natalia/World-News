import { ButtonSearch, ContainerSearch, Input } from "./styledSearchPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../../redux/store";
import { NewsCard } from "../news/newsCard";
import { NewsCardType } from "../../../redux/reducers/types";
import { v4 as uuidv4 } from 'uuid';

export const SearchPage = () => {

    const [searchValue, setSearchValue] = useState("");
    const [arrFoundNews, setArrFoundNews] = useState<Array<NewsCardType> | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event?.target.value)
    }

    const { newsData, newsDataByCategory } = useSelector((state: StoreType) => state)

    const allArrayData = [...newsData, ...newsDataByCategory]

    const searchNews = () => {
        const foundFilteredNews = allArrayData.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .filter((item, index, array) => array.findIndex(el => item.uri === el.uri) === index)
            .filter((element, index, array) => array.findIndex(el => element.title === el.title) === index)

        setArrFoundNews(foundFilteredNews)
        console.log("Found", foundFilteredNews)
    }

    return (
        <ContainerSearch style={{ minHeight: "53vh" }}>
            <div>
                <label>
                    <Input
                        id="search"
                        type="search"
                        placeholder="Enter your request..."
                        onChange={handleChange}
                        value={searchValue}
                    />
                    <ButtonSearch onClick={searchNews}>
                        <FontAwesomeIcon size="xl" icon={faMagnifyingGlass} />
                    </ButtonSearch>
                </label>
            </div>
            <div>
                {arrFoundNews ?
                    arrFoundNews.map((item) => < NewsCard key={uuidv4()} dataNews={item} />)
                    : null
                }
            </div>
        </ContainerSearch>
    );
};