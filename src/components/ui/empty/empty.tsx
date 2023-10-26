import { Container, Description, TitlePage, Wrapper } from "./styledEmpty";

export const Empty = () => {
    return (
        <Container>
            <Wrapper>
                <TitlePage>404</TitlePage>
                <Description>Page not found</Description>
            </Wrapper>
        </Container>
    );
};