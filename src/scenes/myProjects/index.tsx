import image1 from "@/assets/image1.png";
import solarKb from "@/assets/solarKb.jpg";
import sweepYoutube from "@/assets/sweepYoutube.png";
import HText from "@/common/HText";
import { ProjectType, SelectedPage } from "@/common/types";
import { motion } from "framer-motion";
import Project from "./Project";
import { useSearch } from "@/context/SearchContext";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects: Array<ProjectType> = [
  {
    name: "Solar-kb",
    link: "https://solarkb.com",
    github: "https://github.com/chiragmandyal1/solar-kb",
    description:
      "Ask the solar system: a RAG chatbot that answers only from ~270 NASA pages, cites its sources and refuses off-topic questions (30/30 on its own test set). A 3D solar system flies to the planet or moon in each answer. NestJS API, Postgres + pgvector, Groq with a Claude fallback, Google sign-in with daily limits, Docker and Caddy HTTPS.",
    image: solarKb,
    technologies: ["React", "Three.js", "NestJS", "PostgreSQL", "RAG"],
    featured: true,
  },
  {
    name: "Sweep for YouTube",
    github: "https://github.com/chiragmandyal1/sweep-youtube",
    description:
      "Chrome extension that bulk-deletes YouTube playlists, removes videos from a playlist and bulk-unsubscribes from channels. Drives YouTube's own UI to avoid the Data API's 200-deletes-a-day quota, with smart-select filters, auto-stop on failures and no data leaving the browser.",
    image: sweepYoutube,
    technologies: ["JavaScript", "Chrome Extension", "Manifest V3"],
    featured: true,
  },
  {
    name: "React-Firebase",
    link: "https://react-wecodeforyou.web.app/",
    description:
      "A secure React.js and Firebase project for storing and displaying user data with authentication and cloud storage.",
    image: image1,
    technologies: ["React", "Firebase", "Firestore", "Bootstrap"],
    featured: true,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function OurProjects({ setSelectedPage }: Props) {
  const { searchQuery } = useSearch();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const scroller = useRef<HTMLDivElement>(null);
  // one card plus its gap per click
  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (el) el.scrollBy({ left: dir * (el.clientWidth * 0.5 + 12), behavior: "smooth" });
  };

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

        {/* Projects: horizontal scroll, one card snaps into place at a time */}
        <div className="relative mx-auto mt-6 w-5/6 max-w-6xl">
          {filteredProjects.length > 1 && (
            <div className="mb-3 flex justify-end gap-2">
              {([-1, 1] as const).map((dir) => (
                <button
                  key={dir}
                  type="button"
                  aria-label={dir === -1 ? "Scroll projects left" : "Scroll projects right"}
                  onClick={() => scrollBy(dir)}
                  className="rounded-full border border-zinc-300 p-2 text-zinc-600 transition-colors hover:border-amber-500 hover:text-amber-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
                >
                  {dir === -1 ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                </button>
              ))}
            </div>
          )}
          <div
            ref={scroller}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
          >
            {filteredProjects.map((item: ProjectType, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)]"
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
