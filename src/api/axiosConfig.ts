import axios from "axios";

export const axiosApiInstance = axios.create({
    baseURL: "https://newsdata.io/api/1/news?apikey=pub_292815bf2785377c26ea1de22dd3cc066df8f",
    // headers: {
    //     "X-API-KEY": "apikey=pub_292815bf2785377c26ea1de22dd3cc066df8f"
    // }
});