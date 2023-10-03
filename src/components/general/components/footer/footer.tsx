import {
    ContainerFooter, ContainerInfoFooter, CopyrightFooter, ItemCopyrightFooter,
    ItemInfoFooter, ListInfoFooter, Title, TitleContainer, WrapperFooter
} from "./styledFooter";

export const Footer = () => {
    return (
        <ContainerFooter>
            <WrapperFooter>
                <TitleContainer>
                    <Title>World News</Title>
                </TitleContainer>
                <ContainerInfoFooter>
                    <ListInfoFooter>
                        <ItemInfoFooter to="/contactUs">Contact Us</ItemInfoFooter>
                        <ItemInfoFooter to="/privacyPolicy">Privacy Policy</ItemInfoFooter>
                        <ItemInfoFooter to="/about">About</ItemInfoFooter>
                        <ItemInfoFooter to="/help">Help</ItemInfoFooter>
                    </ListInfoFooter>
                </ContainerInfoFooter>
                <CopyrightFooter>
                    <ItemCopyrightFooter>© 2023 World News</ItemCopyrightFooter>
                </CopyrightFooter>
            </WrapperFooter>
        </ContainerFooter>
    );
};