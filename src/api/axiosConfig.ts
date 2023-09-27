import axios from "axios";

export const axiosApiInstance = axios.create({
    baseURL: "https://newsdata.io/api/1",
});