import { Description, Link, LinkDescription, LinksSection, Tile, Title, Wrapper } from "./styled"

export const PortfolioSection = () => {

    return (
        <Wrapper>
            <Tile>
                <Title>title</Title>
                <Description>description</Description>
                <LinksSection><LinkDescription>link description</LinkDescription><Link target="_blank" rel="noreferrer" href="">LINK</Link></LinksSection>
                <LinksSection><LinkDescription>link description</LinkDescription><Link target="_blank" rel="noreferrer" href="">LINK</Link></LinksSection>
            </Tile>
        </Wrapper>
    )
}