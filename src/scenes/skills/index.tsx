import HText from "@/common/HText";
import { SelectedPage, SkillType } from "@/common/types";
import { motion } from "framer-motion";
import { FaDocker } from "react-icons/fa";
import { FaGitlab, FaReact } from "react-icons/fa6";
import {
  SiAxios,
  SiMongodb,
  SiNestjs,
  SiTypescript,
  SiMui,
  SiPostgresql,
  SiVite,
  SiLeaflet,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import Skill from "./Skill";

const skills: Array<SkillType> = [
  { icon: <TbBrandJavascript className="h-8 w-8" />, title: "JavaScript" },
  { icon: <SiTypescript className="h-8 w-8" />, title: "TypeScript" },
  { icon: <FaReact className="h-8 w-8" />, title: "React" },
  { icon: <SiVite className="h-8 w-8" />, title: "Vite" },
  { icon: <SiNestjs className="h-8 w-8" />, title: "NestJS" },
  { icon: <SiAxios className="h-8 w-8" />, title: "REST APIs" },
  { icon: <SiMongodb className="h-8 w-8" />, title: "MongoDB" },
  { icon: <SiPostgresql className="h-8 w-8" />, title: "TimescaleDB" },
  { icon: <SiLeaflet className="h-8 w-8" />, title: "Leaflet" },
  { icon: <SiMui className="h-8 w-8" />, title: "Material UI" },
  { icon: <FaGitlab className="h-8 w-8" />, title: "Git" },
  { icon: <FaDocker className="h-8 w-8" />, title: "Docker" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

type Props = { setSelectedPage: (value: SelectedPage) => void };

function Skills({ setSelectedPage }: Props) {
  return (
    <section id="skills" className="w-full py-24">
      <div className="mx-auto w-5/6 max-w-6xl">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}>
          <motion.div
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
            <p className="my-5 text-zinc-500 dark:text-zinc-400">
              The stack I work with daily.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            {skills.map((skill: SkillType) => (
              <Skill
                key={skill.title}
                icon={skill.icon}
                title={skill.title}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
