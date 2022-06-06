import { styledIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./img/github-icon.svg";
import { ReactComponent as FacebookIcon } from "./img/facebook-icon.svg";
import { ReactComponent as LinkedInIcon } from "./img/linkedin-icon.svg";
import { DefaultTheme, StyledComponent } from "styled-components";

export interface Isocials {
    name: string;
    url: string;
    Icon: StyledComponent<any, DefaultTheme, object, string | number | symbol>;
}

export const socials: Isocials[] = [
    {
        name: "Github",
        url: "https://github.com/piotrekbrzegowy",
        Icon: styledIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/piotrek.brzegowy.3",
        Icon: styledIcon(FacebookIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/piotrekbrzegowy/",
        Icon: styledIcon(LinkedInIcon),
    },
]