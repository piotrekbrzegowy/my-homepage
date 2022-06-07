import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PortfolioSection } from "./Portfolio";
import { Skills } from "./Section";
import { futureSkillsData, skillsData } from "./skillsData";
import { Wrapper } from "./styled";
import { Subheader } from "./Subheader";

export const PersonalHomepage = () => (
    <Wrapper>
        <ThemeSwitch />
        <Header />
        <Skills title={"My skillset includes"} skills={skillsData} />
        <Skills title={"What I want to learn next"} skills={futureSkillsData} />
        <Subheader title={"Portfolio"} description={"My recent projects"} />
        <PortfolioSection />
        <Footer />
    </Wrapper>
)