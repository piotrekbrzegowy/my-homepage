import { useEffect } from "react";
import { StateChecker } from "../../../../common/StateChecker";
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchRepositoriesLoading, selectError, selectLoading, selectRepositories } from "../../personalHomepageSlice";
import { Description, Link, LinkDescription, LinksSection, Tile, Title, Wrapper } from "./styled"

export const PortfolioSection = () => {
    const dispatch = useAppDispatch();
    const repositories = useAppSelector(selectRepositories);
    const isLoading = useAppSelector(selectLoading);
    const isError = useAppSelector(selectError);

    useEffect(() => {
        dispatch(fetchRepositoriesLoading());
    }, [dispatch])

    return (
        <StateChecker isLoading={isLoading} isError={isError}>
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
        </StateChecker>
    )
}