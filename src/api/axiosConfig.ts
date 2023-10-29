import axios from "axios";

export const axiosApiInstance = axios.create({
    baseURL: "https://eventregistry.org/api/v1/article/getArticles",
});