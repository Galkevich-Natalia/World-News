import { FC } from "react"
import { CardLink, Container, Img, ImgContainer, TextContainer, TextElements, Title, Wrapper } from "./styledNewsCard";
import { NewsCardType } from "../../../redux/reducers/newsDataReducer/types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";
import { ThemeContextType } from "../../../contexts/themeContext/types";


interface NewsCardProps {
  dataNews: NewsCardType;
  className?: string ;
}

export const NewsCard: FC<NewsCardProps> = ({ dataNews, className }) => {

  const themeContext = useContext<ThemeContextType>(ThemeContext);

  return (
    <Container themestyles={themeContext.themeStyles} type={className}>
      <CardLink to={`/news/${dataNews.uri}/editNews`}>
        <Wrapper type={className}>
          <ImgContainer type={className}>
            <Img src={dataNews.image!}></Img>
          </ImgContainer>
          <TextContainer type={className}>
            <Title themestyles={themeContext.themeStyles} type={className} >{dataNews.title}</Title>
          </TextContainer>
        </Wrapper>
      </CardLink>
    </Container >
  );
};