import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { ContIconSearch, ItemInfo } from "./styledBtnSearch";

export const BtnSearch = () => {
    return (
        <ContIconSearch>
            <ItemInfo to="/search">
                <FontAwesomeIcon size="xl" color="white" icon={faSearch} />
            </ItemInfo>
        </ContIconSearch>
    );
};