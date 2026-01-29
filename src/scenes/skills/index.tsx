import HText from "@/common/HText";
import { SelectedPage, SkillType } from "@/common/types";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { FaDocker } from "react-icons/fa";
import { FaGitlab, FaReact } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiAxios,
  SiMongodb,
  SiNestjs,
  SiTypescript,
  SiMui,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import Skill from "./Skill";

const skillSet1: Array<SkillType> = [
  {
    icon: <TbBrandJavascript className="h-10 w-10" />,
    title: "JavaScript",
  },
  {
    icon: <SiTypescript className="h-10 w-10" />,
    title: "TypeScript",
  },
  {
    icon: <FaReact className="h-10 w-10" />,
    title: "React",
  },
  {
    icon: <TbBrandNextjs className="h-10 w-10" />,
    title: "Next.js",
  },
  {
    icon: <SiNestjs className="h-10 w-10" />,
    title: "NestJS",
  },
  {
    icon: <SiAxios className="h-10 w-10" />,
    title: "REST APIs",
  },
];
const skillSet2: Array<SkillType> = [
  {
    icon: <SiMongodb className="h-10 w-10" />,
    title: "MongoDB",
  },
  {
    icon: <SiPostgresql className="h-10 w-10" />,
    title: "PostgreSQL",
  },
  {
    icon: <SiMui className="h-10 w-10" />,
    title: "Material UI",
  },
  {
    icon: <FaGitlab className="h-10 w-10" />,
    title: "Git",
  },
  {
    icon: <FaDocker className="h-10 w-10" />,
    title: "Docker",
  },
  {
    icon: <IoLogoFirebase className="h-10 w-10" />,
    title: "Firebase",
  },
];
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
type Props = { setSelectedPage: (value: SelectedPage) => void };

function Skills({ setSelectedPage }: Props) {
  const { theme } = useTheme();
  return (
    <section id="skills" className={`mx-auto min-h-fit w-5/6 py-20 ${theme === "dark" ? "" : ""}`}>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}>
        {/* Header */}
        <motion.div
          className="md:my-20 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Technologies</HText>
          <p className="my-5 text-sm">Skills</p>
        </motion.div>
        {/* Skills */}
        <motion.div
          className="gap- mt-5 items-center justify-between md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {skillSet1.map((benefit: SkillType) => (
            <Skill
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <motion.div
          className="gap- mt-5 items-center justify-between md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {skillSet2.map((benefit: SkillType) => (
            <Skill
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
