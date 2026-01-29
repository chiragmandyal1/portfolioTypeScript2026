export enum SelectedPage {
  AboutMe = "aboutme",
  Skills = "skills",
  Projects = "projects",
  Footer = "footer",
}
export interface SkillType {
  icon: JSX.Element;
  title: string;
}

export interface ProjectType {
  name: string;
  description?: string;
  link?: string;
  github?: string;
  demo?: string;
  image: string;
  technologies?: string[];
  featured?: boolean;
}

export interface TimelineItemType {
  year: string;
  title: string;
  company?: string;
  description: string;
}

export interface TestimonialType {
  name: string;
  role: string;
  text: string;
  image?: string;
}

export interface ExperienceType {
  company: string;
  position: string;
  duration: string;
  description: string;
  skills: string[];
}
