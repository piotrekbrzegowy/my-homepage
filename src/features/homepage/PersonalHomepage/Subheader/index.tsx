import { Wrapper, Description, Title, Icon } from "./styled";

interface ISubheaderProps {
    title: string;
    description: string;
}

export const Subheader = ({ title, description }: ISubheaderProps) => (
    <Wrapper>
        <Icon />
        <Title>{title}</Title>
        <Description>{description}</Description>
    </Wrapper>
)