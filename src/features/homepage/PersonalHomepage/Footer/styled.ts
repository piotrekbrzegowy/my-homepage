import styled from "styled-components";

export const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        gap: 12px;
    }
`;

export const SmallText = styled.p`
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: 12px;
    font-weight: 700;
    margin: 120px 0 0 0;

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        margin: 48px 0 0 0;
    }
`;

export const TitleLink = styled.a`
    font-size: 32px;
    font-weight: 900;
    margin: 0;
    text-decoration: none;
    color: ${({ theme }) => theme.color.textPrimary};

    &:hover{
        color: ${({ theme }) => theme.color.textHover};
    }

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        font-size: 18px;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    line-height: 140%;
    margin: 0;
    color: ${({ theme }) => theme.color.textPrimary};

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        font-size: 14px;
    }
`;