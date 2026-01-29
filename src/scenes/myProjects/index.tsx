import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import HText from "@/common/HText";
import { ProjectType, SelectedPage } from "@/common/types";
import { motion } from "framer-motion";
import Project from "./Project";
import { useTheme } from "@/context/ThemeContext";
import { useSearch } from "@/context/SearchContext";
import { useState } from "react";

const projects: Array<ProjectType> = [
  {
    name: "React-Firebase",
    link: "https://react-wecodeforyou.web.app/",
    github: "https://github.com/yourusername/react-firebase",
    description:
      "A secure React.js and Firebase project for storing and displaying user data with authentication and cloud storage.",
    image: image1,
    technologies: ["React", "Firebase", "Firestore", "Bootstrap"],
    featured: true,
  },
  {
    name: "NewsApp",
    link: "https://github.com/WhySoOpKratos/News-App",
    github: "https://github.com/WhySoOpKratos/News-App",
    description:
      "A React news application that fetches and displays latest news headlines in a user-friendly interface.",
    image: image2,
    technologies: ["React", "Axios", "REST API"],
    featured: true,
  },
  // {
  //   name: "E-Commerce Platform",
  //   description:
  //     "Full-stack e-commerce platform with payment integration and inventory management.",
  //   image: image3,
  //   technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  //   featured: false,
  // },
  // {
  //   name: "Task Management App",
  //   description:
  //     "Collaborative task management tool with real-time updates and team features.",
  //   image: image3,
  //   technologies: ["TypeScript", "React", "Firebase", "Tailwind"],
  //   featured: false,
  // },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function OurProjects({ setSelectedPage }: Props) {
  const { theme } = useTheme();
  const { searchQuery } = useSearch();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechnologies = Array.from(
    new Set(
      projects.flatMap((p) => p.technologies || [])
    )
  );

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      !searchQuery ||
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTech =
      !selectedTech || project.technologies?.includes(selectedTech);

    return matchesSearch && matchesTech;
  });

  return (
    <section
      id="projects"
      className={`w-full pb-20 pt-10 ${theme === "dark" ? "bg-gray-900" : "bg-gradient-to-b from-gray-50 to-white"
        }`}
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Projects</HText>
            <p className="py-5">Some personal projects I have worked on.</p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 my-6">
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all shadow-sm ${selectedTech === null
                ? theme === "dark"
                  ? "bg-yellow-400 text-black shadow-md scale-105"
                  : "bg-blue-500 text-white shadow-md scale-105"
                : theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white border border-blue-200 hover:border-blue-400 hover:shadow-md"
                }`}
            >
              All
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all shadow-sm ${selectedTech === tech
                  ? theme === "dark"
                    ? "bg-yellow-400 text-black shadow-md scale-105"
                    : "bg-blue-500 text-white shadow-md scale-105"
                  : theme === "dark"
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-white border border-blue-200 hover:border-blue-400 hover:shadow-md"
                  }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-10 w-full px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {filteredProjects.map((item: ProjectType, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Project
                  name={item.name}
                  link={item.link}
                  github={item.github}
                  description={item.description}
                  image={item.image}
                  technologies={item.technologies}
                />
              </motion.div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <p className="text-center py-10">No projects match your criteria.</p>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default OurProjects;
