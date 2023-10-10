import { FC } from "react"
import { Container, Img, ImgContainer, TextContainer, TextElements, Title, Wrapper } from "./styledNewsCard";
import { NewsCardType } from "../../../redux/reducers/types";
import { Link } from "react-router-dom";


interface NewsCardProps {
  dataNews: NewsCardType;
}

export const NewsCard: FC<NewsCardProps> = ({ dataNews }) => {
  return (
    <Container>
      <Link to={`/news/${dataNews.uri}/editNews`}
        style={{ textDecoration: "none" }}
      >
        <Wrapper>
          <TextContainer>
            <Title>{dataNews.title}</Title>
          </TextContainer>
          <ImgContainer>
          <Img src={dataNews.image!}></Img>
          </ImgContainer>
        </Wrapper>

    </Link>
    </Container >
  );
};