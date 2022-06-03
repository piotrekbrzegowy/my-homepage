import styled from "styled-components";
import { ReactComponent as Bullet } from "./img/bullet.svg";

export const Section = styled.section`
    background-color: ${({ theme }) => theme.color.sectionBackground};
    padding: 32px;
    margin: 63px 0 0 0;
    box-shadow: 0px -2px 50px ${({ theme }) => theme.color.sectionShadow}, 0px 16px 58px ${({ theme }) => theme.color.sectionShadow};
    border-radius: 4px;

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        padding: 16px;
        margin: 48px 0 0 0;
    }
`;

export const Title = styled.h2`
    margin: 0 0 32px 0;
    font-size: 30px;
    font-weight: 900;
    padding: 0 0 15px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.sectionTitleBorder};
    color: ${({ theme }) => theme.color.textPrimary};

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        margin: 0 0 12px 0;
        font-size: 18px;
        padding: 0 0 12px 0;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 0;
    margin: 0;
    list-style-type: none;
    font-size: 18px;
    color: ${({ theme }) => theme.color.textSecondary};

    @media(max-width: ${({ theme }) => theme.media.tabletMax}px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        grid-template-columns: 1fr;
        font-size: 14px;
    }
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
`;

export const ListBullet = styled(Bullet)`
    width: 9px;
    height: 9px;
    margin: 0 16px 0 0;
    color: ${({theme}) => theme.color.sectionBullet};

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        width: 6px;
        height: 6px;
        margin: 0 8px 0 0;
    }
`;