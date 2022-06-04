import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchRepositoriesLoading, selectRepositories } from "../../personalHomepageSlice";
import { Description, Link, LinkDescription, LinksSection, Tile, Title, Wrapper } from "./styled"

export const PortfolioSection = () => {
    const dispatch = useAppDispatch();
    const repositories = useAppSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositoriesLoading());
    }, [dispatch])

    return (
        <Wrapper>
            {repositories?.map(({ id, name, description, homepage, html_url }) => (
                <Tile key={id}>
                    <Title>{name}</Title>
                    {description && <Description>{description}</Description>}
                    {homepage && <LinksSection><LinkDescription>Demo:</LinkDescription><Link target="_blank" rel="noreferrer" href={homepage}>{homepage}</Link></LinksSection>}
                    <LinksSection><LinkDescription>Code:</LinkDescription><Link target="_blank" rel="noreferrer" href={html_url}>{html_url}</Link></LinksSection>
                </Tile>
            ))}
        </Wrapper>
    )
}