import { useTheme } from "@/context/ThemeContext";
import { Github, ExternalLink } from "lucide-react";

type Props = {
  name: string;
  link?: string;
  description?: string;
  image: string;
  github?: string;
  technologies?: string[];
};

function Project({
  name,
  link,
  description,
  image,
  github,
  technologies,
}: Props) {
  const { theme } = useTheme();

  return (
    <li className="relative mx-5 inline-block">
      <div
        className={`group h-[380px] w-[480px] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl ${theme === "dark"
          ? "bg-gray-800 border border-gray-700"
          : "bg-white border border-blue-200 hover:border-blue-400 shadow-md"
          }`}
      >
        <img
          alt={name}
          src={image}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="p-5 flex flex-col h-[200px]">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-sm flex-grow mb-3 leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-3">
            {description || "Project description"}
          </p>
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className={`px-2 py-1 text-xs rounded-full font-semibold ${theme === "dark"
                    ? "bg-yellow-400 text-black"
                    : "bg-blue-500 text-white"
                    }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-colors text-sm font-semibold ${theme === "dark"
                  ? "bg-yellow-400 text-black hover:bg-yellow-500"
                  : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
              >
                <ExternalLink size={16} /> Demo
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 px-3 py-1 border-2 rounded-lg transition-colors text-sm font-semibold ${theme === "dark"
                  ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  }`}
              >
                <Github size={16} /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default Project;
