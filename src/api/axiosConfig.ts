import axios from "axios";

export const axiosApiInstance = axios.create({
    baseURL: "http://eventregistry.org/api/v1/article/getArticles",
});