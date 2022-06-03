import { nanoid } from "@reduxjs/toolkit";
import { Item, List, ListBullet, Section, Title } from "./styled";

interface ISkillsProps {
    title: string,
    skills: string[],
}

export const Skills = ({ title, skills }: ISkillsProps) => (
    <Section>
        <Title>{title}</Title>
        <List>
            {skills.map((skill) => (
                <Item key={nanoid()}>
                    <ListBullet />{skill}
                </Item>
            ))}
        </List>
    </Section>
)