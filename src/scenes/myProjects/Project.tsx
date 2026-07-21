import { Github, ExternalLink } from "lucide-react";

type Props = {
  name: string;
  link?: string;
  description?: string;
  image: string;
  github?: string;
  technologies?: string[];
};

function Project({ name, link, description, image, github, technologies }: Props) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-stone-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:shadow-lg dark:border-zinc-800 dark:bg-[#13161c] dark:hover:border-amber-400">
      <div className="overflow-hidden">
        <img
          alt={name}
          src={image}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-grow flex-col p-5">
        <h3 className="mb-2 text-xl font-bold">{name}</h3>
        <p className="mb-4 flex-grow text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description || "Project description"}
        </p>
        {technologies && technologies.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-300 px-2.5 py-0.5 font-mono text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-3.5 py-1.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-400 dark:bg-amber-400 dark:hover:bg-amber-300"
            >
              <ExternalLink size={15} /> Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-zinc-300 px-3.5 py-1.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-amber-500 hover:text-amber-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-amber-400 dark:hover:text-amber-400"
            >
              <Github size={15} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
