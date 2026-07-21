import { SelectedPage } from "@/common/types";
import HText from "@/common/HText";
import { motion } from "framer-motion";

interface Props {
    setSelectedPage: (value: SelectedPage) => void;
}

export default function Experience({ setSelectedPage }: Props) {
    const experiences = [
        {
            year: "04/2023 - Present",
            role: "Full Stack Developer",
            company: "KSDAC LLP",
            description:
                "Sole developer of a satellite-network monitoring platform tracking 100K+ provisioned devices (64K+ active links) for enterprise clients in banking, telecom, and defense. Designed a dual-database architecture — MongoDB for device/customer metadata, TimescaleDB for high-frequency telemetry. Built real-time NOC dashboards, 7-role RBAC with hierarchical data isolation, and LEO path tracking on interactive maps. Built an automated 30-minute API sync for device-disconnection data that cut turnaround from weeks to under a day, and migrated a legacy REST codebase to a NestJS/TypeScript monorepo.",
            skills: [
                "React",
                "NestJS",
                "TypeScript",
                "MongoDB",
                "TimescaleDB",
                "Leaflet",
                "MUI",
            ],
        },
        {
            year: "09/2022 - 12/2022",
            role: "JavaScript Developer",
            company: "Prospectss",
            description:
                "Built and maintained browser extensions for a paid SaaS platform, handling dynamic content and site-specific rendering constraints. Implemented a credit-based metering system where each user operation consumed billed credits, and improved error handling and reliability of production extensions used by paying customers.",
            skills: ["JavaScript", "Browser Extensions", "Automation", "APIs"],
        },
        {
            year: "01/2022 - 04/2022",
            role: "Frontend Intern",
            company: "Crossscope",
            description:
                "Worked on healthcare technology platform with AI-driven solutions. Developed UI modules including dashboard, authentication, and account management. Integrated frontend with REST APIs and built responsive components.",
            skills: ["React", "Material UI", "Formik", "Axios"],
        },
    ];

    return (
        <section
            id="experience"
            className="w-full py-24"
            onMouseEnter={() => setSelectedPage(SelectedPage.Experience)}
        >
            <div className="mx-auto w-5/6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <HText>Experience</HText>
                    <p className="my-5 text-zinc-500 dark:text-zinc-400">My professional journey</p>
                </motion.div>

                <div className="mt-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="flex gap-6 pb-10 last:pb-0"
                        >
                            {/* Timeline spine */}
                            <div className="flex flex-col items-center">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-amber-500 bg-amber-500/10 font-mono font-bold text-amber-600 dark:border-amber-400 dark:text-amber-400">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                {index < experiences.length - 1 && (
                                    <div className="w-px flex-grow bg-zinc-300 dark:bg-zinc-700" />
                                )}
                            </div>

                            {/* Card */}
                            <div className="flex-1 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-amber-500 hover:shadow-md dark:border-zinc-800 dark:bg-[#13161c] dark:hover:border-amber-400">
                                <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                                    <div>
                                        <h3 className="text-xl font-bold">{exp.role}</h3>
                                        <p className="font-semibold text-amber-600 dark:text-amber-400">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <span className="font-mono text-sm text-zinc-500">
                                        {exp.year}
                                    </span>
                                </div>
                                <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-zinc-300 px-3 py-1 font-mono text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
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
