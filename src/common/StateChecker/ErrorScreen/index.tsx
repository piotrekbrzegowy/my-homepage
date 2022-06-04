import { github } from "../../../features/homepage/PersonalHomepage/links";
import { ButtonLink, Description, ErrorIcon, Title, Wrapper } from "./styled";

export const ErrorScreen = () => (
    <Wrapper>
        <ErrorIcon />
        <Title>Ooops! Something went wrong...</Title>
        <Description>Sorry, failed to load Github projects. <br />You can check them directly on Github.</Description>
        <ButtonLink href={github}>Go to Github</ButtonLink>
    </Wrapper>
)