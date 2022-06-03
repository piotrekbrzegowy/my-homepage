import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { Header } from "./Header";
import { Skills } from "./Section";
import { futureSkillsData, skillsData } from "./skillsData";
import { Wrapper } from "./styled";

export const PersonalHomepage = () => (
    <Wrapper>
        <ThemeSwitch />
        <Header />
        <Skills title={"My skillset includes"} skills={skillsData} />
        <Skills title={"What I want to learn next"} skills={futureSkillsData} />
    </Wrapper>
)