import { ButtonIcon, ButtonLink, Content, Description, Image, SmallText, Title, Wrapper } from "./styled";
import profilePhoto from "./img/photo.jpg";
import { email } from "../links";

export const Header = () => (
    <Wrapper>
        <Image src={profilePhoto} alt="profile photo" />
        <Content>
            <SmallText>This is</SmallText>
            <Title>Piotrek Brzegowy</Title>
            <Description>I'm a passionate Junior Frontend Developer, currently looking for new job opportunities.</Description>
            <ButtonLink href={`mailto:${email}`} title={email}><ButtonIcon />Hire me</ButtonLink>
        </Content>
    </Wrapper>
)