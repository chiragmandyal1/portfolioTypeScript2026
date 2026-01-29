import { SelectedPage } from "@/common/types";
import HText from "@/common/HText";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

interface Props {
    setSelectedPage: (value: SelectedPage) => void;
}

export default function Experience({ setSelectedPage }: Props) {
    const { theme } = useTheme();

    const experiences = [
        {
            year: "04/2023 - Present",
            role: "Senior Full Stack Developer",
            company: "KSDAC LLP",
            description:
                "Designed and maintained a large-scale device monitoring platform managing 100K+ devices. Built end-to-end features using React, Next.js, Node.js, NestJS, and TypeScript. Implemented real-time analytics dashboards, RBAC, and data visualizations. Modernized legacy codebases and resolved production issues.",
            skills: [
                "React",
                "Next.js",
                "Node.js",
                "NestJS",
                "MongoDB",
                "TimescaleDB",
                "MUI",
            ],
        },
        {
            year: "09/2022 - 12/2022",
            role: "JavaScript Developer",
            company: "Prospectss",
            description:
                "Developed Chrome extensions for SaaS platform focused on social media data extraction. Implemented web scraping workflows, credit-based usage systems, and worked on multiple client-facing applications.",
            skills: ["JavaScript", "Chrome Extensions", "Web Scraping", "APIs"],
        },
        {
            year: "01/2022 - 04/2022",
            role: "Frontend Intern",
            company: "Crosscope",
            description:
                "Worked on healthcare technology platform with AI-driven solutions. Developed UI modules including dashboard, authentication, and account management. Integrated frontend with REST APIs and built responsive components.",
            skills: ["React", "JavaScript", "Material UI", "Bootstrap", "Axios"],
        },
    ];

    return (
        <section
            id="experience"
            className={`mx-auto w-full px-4 py-20 ${theme === "dark" ? "bg-gray-900" : "bg-gradient-to-b from-white to-gray-100"
                }`}
            onMouseEnter={() => setSelectedPage(SelectedPage.Skills)}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <HText>Experience</HText>
                    <p className="my-5 text-sm">My professional journey</p>
                </motion.div>

                <div className="mt-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="mb-10 flex gap-6"
                        >
                            <div className="flex flex-col items-center">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg ${theme === "dark"
                                        ? "bg-yellow-400 text-black"
                                        : "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                                    }`}>
                                    {index + 1}
                                </div>
                                {index < experiences.length - 1 && (
                                    <div
                                        className={`w-1 h-20 ${theme === "dark" ? "bg-gray-700" : "bg-gradient-to-b from-blue-300 to-purple-400"
                                            }`}
                                    />
                                )}
                            </div>

                            <div
                                className={`flex-1 p-6 rounded-lg shadow-md transition-all hover:shadow-xl ${theme === "dark"
                                    ? "bg-gray-800 border border-gray-700"
                                    : "bg-white border border-blue-200 hover:border-blue-400"
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold">{exp.role}</h3>
                                        <p className="text-yellow-400 font-semibold">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-500">
                                        {exp.year}
                                    </span>
                                </div>
                                <p className="mb-4 text-gray-600 dark:text-gray-400">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`px-3 py-1 text-xs font-semibold rounded-full ${theme === "dark"
                                                    ? "bg-yellow-400 text-black"
                                                    : "bg-blue-500 text-white"
                                                }`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
