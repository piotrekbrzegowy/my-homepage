import { email } from "../links";
import { SocialIcons } from "./SocialIcons";
import { Description, SmallText, TitleLink, Wrapper } from "./styled";

export const Footer = () => (
    <Wrapper>
        <SmallText>LET'S TALK!</SmallText>
        <TitleLink href={`mailto: ${email}`}>brzegowypiotrek@gmail.com</TitleLink>
        <Description>I’m always open to new projects whenever I have the time. If you want to create a website and need some help to make your ideas come to life, feel free to contact me</Description>
        <SocialIcons />
    </Wrapper>
)