import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        grid-template-columns: 1fr;
    }
`;

export const Tile = styled.div`
    max-width: 592px;
    background-color: ${({ theme }) => theme.color.repoBackground};
    transition: background-color 0.2s ease;
    border: 6px solid ${({ theme }) => theme.color.repoBorder};
    box-shadow: 0px -2px 50px ${({ theme }) => theme.color.repoShadow}, 0px 16px 58px ${({ theme }) => theme.color.repoShadow};
    border-radius: 4px;
    padding: 32px;

    &:hover {
        border: 6px solid ${({ theme }) => theme.color.repoBorderHover};
    }

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        max-width: none;
        padding: 16px;
    }
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.color.repoTitle};
    margin: 0 0 24px 0;
    font-size: 24px;
    word-break: break-word;

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        font-size: 16px;
        margin: 0 0 16px 0;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.color.textSecondary};
    line-height: 140%;
    margin: 0 0 16px 0;
    word-break: break-word;

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        font-size: 14px;
        margin: 0 0 8px 0;
    }
`;

export const LinksSection = styled.div`
    display: flex;
    gap: 8px;
`;

export const LinkDescription = styled(Description)`
    margin: 8px 0 0 0;
    line-height: 120%;
    word-break: unset;
`;

export const Link = styled.a`
    font-size: 18px;
    color: ${({ theme }) => theme.color.repoLink};
    margin: 8px 0 0 0px;
    word-break: break-word;

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        font-size: 14px;
    }
`;