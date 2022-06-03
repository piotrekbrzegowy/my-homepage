import 'styled-components';

interface IScreenWidth {
    mobileMax: number;
    tabletMax: number;
}

interface IColors {
    textPrimary: string;
    textSecondary: string;
    background: string;
    sectionBackground: string;
    sectionShadow: string;
    sectionTitleBorder: string;
    sectionBullet: string;
    repoBackground: string;
    repoShadow: string;
    repoBorder: string;
    repoBorderHover: string;
    repoLink: string;
    repoLinkHover: string;
    buttonText: string;
    buttonBackground: string;
    buttonBackgroundHover: string;
    buttonBorder: string;
    buttonShadow: string;
    sunIcon: string;
    socialIconBackground: string;
    socialIconBackgroundHover: string;
    loaderBackground: string;
    loaderFront: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        media: IScreenWidth;
        color: IColors;
    }
}