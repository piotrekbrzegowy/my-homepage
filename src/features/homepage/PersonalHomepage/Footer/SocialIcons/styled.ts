import styled, { DefaultTheme, StyledComponent } from "styled-components";
import { Isocials } from "./socials";

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 32px 0 110px 0;
    display: flex;
    gap: 24px;

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        margin: 28px 0 30px 0;
    }
`;

export const Item = styled.li``;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.socialIconBackground};

    &:hover{
    color: ${({ theme }) => theme.color.socialIconBackgroundHover};
    }
`;

export const styledIcon = (Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined; }>) => styled(Icon)`
    width: 48px;
    height: auto;

    @media(max-width: ${({ theme }) => theme.media.mobileMax}px){
        width: 32px;
    }
`;