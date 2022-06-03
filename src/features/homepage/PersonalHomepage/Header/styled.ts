import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "./img/envelope.svg";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 66px;

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

export const Image = styled.img`
    width: 398px;
    height: auto;
    border-radius: 50%;

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        width: 132px;
    }
`;

export const Content = styled.span``;

export const SmallText = styled.p`
    font-size: 12px;
    font-weight: 700;
    margin: 64px 0 12px 0;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.textSecondary};

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        margin: 0 0 8px 0;
    }
`;

export const Title = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 0;
    color: ${({ theme }) => theme.color.textPrimary};

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        font-size: 22px;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    margin: 35px 0 32px 0;
    color: ${({ theme }) => theme.color.textSecondary};

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        font-size: 17px;
        margin: 16px 0 24px 0;
    }
`;

export const ButtonLink = styled.a`
    width: 154px;
    height: 49px;
    font-size: 20px;
    line-height: 110%;
    padding: 0;
    background-color: ${({ theme }) => theme.color.buttonBackground};
    color: ${({ theme }) => theme.color.buttonText};
    border: 1px solid ${({ theme }) => theme.color.buttonBorder};
    border-radius: 4px;
    display: flex;
    align-items: center;
    text-decoration: none;

    &:hover {
        box-shadow: 2px -2px 0 ${({ theme }) => theme.color.buttonShadow}, -2px 2px 0 ${({ theme }) => theme.color.buttonShadow}, 2px 2px 0 ${({ theme }) => theme.color.buttonShadow}, -2px -2px 0 ${({ theme }) => theme.color.buttonShadow},;
    }

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px) {
        width: 138px;
        height: 46px;
        font-size: 18px;
    }
`;

export const ButtonIcon = styled(EnvelopeIcon)`
    width: 19px;
    margin: 0 18px;

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        width: 16px;
        margin: 0 16px;
    }
`;