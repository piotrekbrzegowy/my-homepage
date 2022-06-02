import { DefaultTheme } from 'styled-components';

const colorNames = {
    white: "#ffffff",
    mineShaft: "#252525",
    mineShaft72percent: "#252525B8",
    slateGray: "#6E7E91",
    mercury: "#E5E5E5",
    iron30percent: "#D1D5DA4D",
    iron10percent: "#D1D5DA1A",
    scienceBlue: "#0366D6",
    scienceBlue50percent: "#0366D680",
    scienceBlue20percent: "#0366D633",
    dodgerBlue: "#2188FF",
    violet2percent: "#090A3305"
}

const media = {
    mobileMax: 767,
    tabletMax: 991
}

export const lightTheme: DefaultTheme = {
    media,
    color: {
        textPrimary: colorNames.mineShaft,
        textSecondary: colorNames.slateGray,
        background: colorNames.mercury,
        sectionBackground: colorNames.white,
        sectionShadow: colorNames.violet2percent,
        sectionTitleBorder: colorNames.iron30percent,
        sectionBullet: colorNames.scienceBlue,
        repoBackground: colorNames.white,
        repoShadow: colorNames.violet2percent,
        repoBorder: colorNames.iron30percent,
        repoBorderHover: colorNames.scienceBlue20percent,
        repoLink: colorNames.dodgerBlue,
        repoLinkHover: colorNames.scienceBlue,
        buttonText: colorNames.white,
        buttonBackground: colorNames.dodgerBlue,
        buttonBackgroundHover: colorNames.scienceBlue,
        buttonBorder: colorNames.iron30percent,
        sunIcon: colorNames.white,
        socialIconBackground: colorNames.mineShaft,
        socialIconBackgroundHover: colorNames.dodgerBlue,
        loaderBackground: colorNames.iron30percent,
        loaderFront: colorNames.dodgerBlue
    }
}

export const darkTheme: DefaultTheme = {
    media,
    color: {
        textPrimary: colorNames.white,
        textSecondary: colorNames.white,
        background: colorNames.mineShaft,
        sectionBackground: colorNames.mineShaft72percent,
        sectionShadow: colorNames.violet2percent,
        sectionTitleBorder: colorNames.iron10percent,
        sectionBullet: colorNames.dodgerBlue,
        repoBackground: colorNames.mineShaft72percent,
        repoShadow: colorNames.violet2percent,
        repoBorder: colorNames.iron10percent,
        repoBorderHover: colorNames.scienceBlue50percent,
        repoLink: colorNames.dodgerBlue,
        repoLinkHover: colorNames.scienceBlue,
        buttonText: colorNames.white,
        buttonBackground: colorNames.dodgerBlue,
        buttonBackgroundHover: colorNames.scienceBlue,
        buttonBorder: colorNames.violet2percent,
        sunIcon: colorNames.mineShaft,
        socialIconBackground: colorNames.white,
        socialIconBackgroundHover: colorNames.dodgerBlue,
        loaderBackground: colorNames.mineShaft72percent,
        loaderFront: colorNames.dodgerBlue
    }
}