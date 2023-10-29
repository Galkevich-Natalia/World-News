import { useState } from "react";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NewsCard } from "../../general/components/newsCard/newsCard";
import { NewsCardType } from "../../../redux/reducers/newsDataReducer/types";
import { StoreType } from "../../../redux/store";
import { v4 as uuidv4 } from 'uuid';

import { ButtonSearch, ContainerSearch, Input } from "./styledSearchPage";


export const SearchPage = () => {

    const [searchValue, setSearchValue] = useState("");
    const [arrFoundNews, setArrFoundNews] = useState<Array<NewsCardType> | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event?.target.value)
    }

    const { newsData, newsDataByCategory } = useSelector((state: StoreType) => state.newsDataCards)

    const allArrayData = [...newsData, ...newsDataByCategory]

    const searchNews = () => {
        const foundFilteredNews = allArrayData.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .filter((item, index, array) => array.findIndex(el => item.uri === el.uri) === index)
            .filter((element, index, array) => array.findIndex(el => element.title === el.title) === index)

        setArrFoundNews(foundFilteredNews)
    }

    return (
        <ContainerSearch>
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