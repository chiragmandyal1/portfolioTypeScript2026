import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import HText from "@/common/HText";
import { ProjectType, SelectedPage } from "@/common/types";
import { motion } from "framer-motion";
import Project from "./Project";
import { useSearch } from "@/context/SearchContext";
import { useState } from "react";

const projects: Array<ProjectType> = [
  {
    name: "React-Firebase",
    link: "https://react-wecodeforyou.web.app/",
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
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function OurProjects({ setSelectedPage }: Props) {
  const { searchQuery } = useSearch();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies || []))
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

  const filterButton = (label: string, active: boolean, onClick: () => void) => (
    <button
      key={label}
      onClick={onClick}
      className={`rounded-lg px-4 py-1.5 font-mono text-sm font-medium transition-all ${active
        ? "bg-amber-500 text-zinc-950 shadow-sm dark:bg-amber-400"
        : "border border-zinc-300 text-zinc-600 hover:border-amber-500 hover:text-amber-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
        }`}
    >
      {label}
    </button>
  );

  return (
    <section id="projects" className="w-full bg-white py-24 dark:bg-[#0f1116]">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}>
        <motion.div
          className="mx-auto w-5/6 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Projects</HText>
          <p className="my-5 text-zinc-500 dark:text-zinc-400">
            Some personal projects I have worked on.
          </p>

          {/* Filter buttons */}
          <div className="my-6 flex flex-wrap gap-3">
            {filterButton("All", selectedTech === null, () => setSelectedTech(null))}
            {allTechnologies.map((tech) =>
              filterButton(tech, selectedTech === tech, () => setSelectedTech(tech))
            )}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="mx-auto mt-6 w-5/6 max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
            <p className="py-10 text-center text-zinc-500">
              No projects match your criteria.
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default OurProjects;
