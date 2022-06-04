import styled from "styled-components";
import { ReactComponent as Error } from "./img/error.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`;

export const ErrorIcon = styled(Error)`
    width: 37px;
    height: auto;
    margin: 96px 0 0 0;
`;

export const Title = styled.h2`
    font-size: 24px;
    margin: 23px 0 32px 0;
    color: ${({ theme }) => theme.color.textPrimary};

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        font-size: 18px;
        margin: 18px 0 24px 0;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    margin: 0 0 32px 0;
    text-align: center;
    color: ${({ theme }) => theme.color.textPrimary};

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        font-size: 17px;
        margin: 0 0 24px 0;
    }
`;

export const ButtonLink = styled.a`
    width: 154px;
    height: 49px;
    font-size: 20px;
    line-height: 230%;
    padding: 0px;
    background-color: ${({ theme }) => theme.color.buttonBackground};
    color: ${({ theme }) => theme.color.buttonText};
    border: 1px solid ${({ theme }) => theme.color.buttonBorder};
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    margin: 0 0 140px 0;
    transition: 0.3s;

    &:hover {
        transform: scale(0.97);
        background-color: ${({ theme }) => theme.color.buttonBackgroundHover};
        box-shadow: 2px -2px 0px ${({ theme }) => theme.color.buttonShadow}, -2px 2px 0px ${({ theme }) => theme.color.buttonShadow}, 2px 2px 0px ${({ theme }) => theme.color.buttonShadow}, -2px -2px 0px ${({ theme }) => theme.color.buttonShadow};
    }

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        width: 138px;
        height: 46px;
        font-size: 18px;
        margin: 0 0 100px 0;
    }
`;