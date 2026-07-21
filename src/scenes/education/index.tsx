import { SelectedPage } from "@/common/types";
import HText from "@/common/HText";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface Props {
    setSelectedPage: (value: SelectedPage) => void;
}

export default function Education({ setSelectedPage }: Props) {
    const educationData = [
        {
            institution: "Uttaranchal University",
            location: "Dehradun, Uttarakhand",
            degree: "B.Tech in Computer Science & Engineering",
            graduation: "April 2022",
            gpa: "CGPA: 8.4/10",
            highlights: ["Full Stack Development", "Data Structures & Algorithms", "Database Management"],
        },
    ];

    return (
        <section
            id="education"
            className="w-full bg-white py-24 dark:bg-[#0f1116]"
            onMouseEnter={() => setSelectedPage(SelectedPage.Education)}
        >
            <div className="mx-auto w-5/6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <HText>Education</HText>
                    <p className="my-5 text-zinc-500 dark:text-zinc-400">My academic background</p>
                </motion.div>

                <div className="mt-8 space-y-6">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="rounded-xl border border-zinc-200 bg-stone-50 p-6 shadow-sm transition-all hover:border-amber-500 hover:shadow-md dark:border-zinc-800 dark:bg-[#13161c] dark:hover:border-amber-400"
                        >
                            <div className="flex gap-4">
                                <div className="mt-1 flex-shrink-0 text-amber-600 dark:text-amber-400">
                                    <GraduationCap size={28} />
                                </div>
                                <div className="flex-grow">
                                    <div className="mb-2 flex flex-col md:flex-row md:items-start md:justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                                            <p className="font-semibold text-amber-600 dark:text-amber-400">
                                                {edu.institution}
                                            </p>
                                            <p className="text-sm text-zinc-500">{edu.location}</p>
                                        </div>
                                        <div className="mt-2 md:mt-0 md:text-right">
                                            <p className="font-mono text-sm text-zinc-500">
                                                {edu.graduation}
                                            </p>
                                            <p className="font-mono font-bold text-amber-600 dark:text-amber-400">{edu.gpa}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {edu.highlights.map((highlight) => (
                                            <span
                                                key={highlight}
                                                className="rounded-full border border-zinc-300 px-3 py-1 font-mono text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
