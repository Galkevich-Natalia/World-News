import { useContext } from "react";
import { ContainerAbout, TextItem, Title, Wrapper } from "./styledAbout";
import { ThemeContext } from "../../../themeContext/themeContext";
import { ThemeContextType } from "../../../themeContext/types";

export const About = () => {

    const themeContext = useContext<ThemeContextType>(ThemeContext);

    return (
        <ContainerAbout>
            <Wrapper>
                <Title themestyles={themeContext.themeStyles} >About</Title>
                <TextItem themestyles={themeContext.themeStyles} >At The Times, our mission is to seek the truth and help people understand the world. We want you to understand how we handle your personal information. We also want you to know your rights and choices.

                    This policy describes how we handle your personal information when you use the “Times Services,” listed below:

                    The New York Times newspaper, plus our International Edition
                    Our websites, like nytimes.com
                    Our apps, like the New York Times app and the New York Times Games app
                    Our email newsletters, like Cooking and Morning Briefing
                    Our pages or ads on social media networks, like our Facebook and Instagram pages
                    Anywhere we gather information from you and refer you to this Privacy Policy
                    How we handle information about you depends on which Times Services you use — and how you use them. For example, we use different information about print subscribers than website visitors.

                    Be aware that certain Times Services work differently. Some have additional terms that supplement this policy (e.g., Reader Submissions). Others, like The Athletic, refer to a different privacy policy altogether, so this one does not apply in those cases.

                    If you have questions, please don’t hesitate to contact us at privacy@nytimes.com. You can also review our Privacy F.A.Q.</TextItem>
            </Wrapper>
        </ContainerAbout>
    );
};