import { FC } from "react"
import { NewsCardType } from "../../../../redux/reducers/types";

interface NewsCardProps {
    dataNews: NewsCardType;
}

export const NewsCard: FC<NewsCardProps> = ({ dataNews }) => {
    return (
      <div style={{border: "1px solid black", padding: 20, margin: 20}}>
        <h2>{dataNews.title}</h2>
        <h2>{dataNews.creator}</h2>
        <img src={dataNews.image_url}></img>
        <h4>{dataNews.description}</h4>
        <h4>{dataNews.pubDate}</h4>
        <h4>{dataNews.country}</h4>
        <h4>{dataNews.category}</h4>
        <h4>{dataNews.language}</h4>
      </div>  
    );
};