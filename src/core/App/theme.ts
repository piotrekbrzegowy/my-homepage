import { DefaultTheme } from 'styled-components';

const colorNames = {
    white: "#ffffff",
    mineShaft: "#252525",
    mineShaft72percent: "rgba(50,50,50, 0.72)",
    slateGray: "#6E7E91",
    mercury: "#E5E5E5",
    iron: "#D1D5DA",
    iron30percent: "rgba(209, 213, 218, 0.30)",
    iron10percent: "rgba(209, 213, 218, 0.10)",
    scienceBlue: "#0366D6",
    scienceBlue50percent: "rgba(3, 102, 214, 0.50)",
    scienceBlue20percent: "rgba(3, 102, 214, 0.20)",
    dodgerBlue: "#2188FF",
    violet2percent: "rgba(9, 10, 51, 0.02)",
    anakiwa: "#8CC2FF"
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
        sectionBullet: colorNames.dodgerBlue,
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
        buttonShadow: colorNames.anakiwa,
        themeSwitchBackground: colorNames.iron,
        themeSwitchBorder: colorNames.slateGray,
        sunIcon: colorNames.white,
        sunIconBackground: colorNames.slateGray,
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
        buttonShadow: colorNames.anakiwa,
        themeSwitchBackground: colorNames.iron30percent,
        themeSwitchBorder: colorNames.white,
        sunIcon: colorNames.mineShaft,
        sunIconBackground: colorNames.white,
        socialIconBackground: colorNames.white,
        socialIconBackgroundHover: colorNames.dodgerBlue,
        loaderBackground: colorNames.mineShaft72percent,
        loaderFront: colorNames.dodgerBlue
    }
}