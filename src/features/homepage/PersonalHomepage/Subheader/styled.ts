import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./img/github-icon.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 72px 0 0 0;

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        margin: 48px 0 0 0;
    }
`;

export const Icon = styled(GithubIcon)`
    width: 40px;
    height: auto;
    color: ${({ theme }) => theme.color.socialIconBackgroundHover};

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        width: 32px;
    }
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin: 13px 0 8px 0;
    color: ${({ theme }) => theme.color.textPrimary};
    
    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        font-size: 18px;
        margin: 13px 0 16px 0;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    color: ${({ theme }) => theme.color.textPrimary};
    margin: 0 0 24px 0;

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        font-size: 17px;
    }
`;