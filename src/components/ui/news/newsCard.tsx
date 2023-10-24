import { FC } from "react"
import { Container, Img, ImgContainer, TextContainer, TextElements, Title, Wrapper } from "./styledNewsCard";
import { NewsCardType } from "../../../redux/reducers/newsDataReducer/types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";
import { ThemeContextType } from "../../../contexts/themeContext/types";


interface NewsCardProps {
  dataNews: NewsCardType;
}

export const NewsCard: FC<NewsCardProps> = ({ dataNews }) => {

  const themeContext = useContext<ThemeContextType>(ThemeContext);

  return (
    <Container>
      <Link to={`/news/${dataNews.uri}/editNews`}
        style={{ textDecoration: "none" }}
      >
        <Wrapper>
          <ImgContainer>
            <Img src={dataNews.image!}></Img>
          </ImgContainer>
          <TextContainer >
            <div>
              <Title themestyles={themeContext.themeStyles} >{dataNews.title}</Title>
            </div>
            {/* <div>
              <div>{dataNews.date}</div>
            </div> */}
          </TextContainer>
        </Wrapper>
      </Link>
    </Container >
  );
};