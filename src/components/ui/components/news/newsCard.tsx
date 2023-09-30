import { FC } from "react"
import { Container, Description, Img, ImgContainer, TextContainer, TextElements, Title} from "./styledNewsCard";
import { NewsCardType } from "../../../../redux/reducers/types";
interface NewsCardProps {
  dataNews: NewsCardType;
}

export const NewsCard: FC<NewsCardProps> = ({ dataNews }) => {
  return (
    <Container>
      <TextContainer>
        <TextElements>
          <Title>{dataNews.title}</Title>
          {/* <Description>{dataNews.description}</Description> */}
          {/* <h2>Author: {dataNews.creator}</h2> */}
          {/* <h3>Category: {dataNews.category}</h3> */}
        </TextElements>
      </TextContainer>
      <ImgContainer>
        <Img src={dataNews.image!}></Img>
      </ImgContainer>
    </Container>
  );
};