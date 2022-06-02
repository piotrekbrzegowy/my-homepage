import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
        box-sizing: border-box;
    };
    *, ::after, ::before {
        box-sizing: inherit;
    };
    body {
        font-family: 'Inter', sans-serif;
        background: ${({ theme }) => theme.color.background};
        transition: transform 0.3s;
    };
`