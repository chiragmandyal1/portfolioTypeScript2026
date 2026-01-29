import { SelectedPage } from "@/common/types";
import HText from "@/common/HText";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface Props {
    setSelectedPage: (value: SelectedPage) => void;
}

export default function Education({ setSelectedPage }: Props) {
    const { theme } = useTheme();

    const educationData = [
        {
            institution: "Uttaranchal University",
            location: "Dehradun, Uttarakhand",
            degree: "B.Tech in Computer Science Engineering",
            graduation: "April 2022",
            gpa: "8.4+ GPA (Summa Cum Laude)",
            highlights: ["Full Stack Development", "Data Structures & Algorithms", "Database Management"],
        },
    ];

    return (
        <section
            id="education"
            className={`mx-auto w-full px-4 py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gradient-to-b from-gray-100 to-blue-50"
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
                    <HText>Education</HText>
                    <p className="my-5 text-sm">My academic background</p>
                </motion.div>

                <div className="mt-12 space-y-6">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-lg border shadow-md hover:shadow-xl transition-all ${theme === "dark"
                                ? "bg-gray-900 border-gray-700"
                                : "bg-white border-blue-200 hover:border-blue-400"
                                }`}
                        >
                            <div className="flex gap-4">
                                <div className="text-yellow-400 mt-1 flex-shrink-0">
                                    <GraduationCap size={28} />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                                            <p className="text-yellow-400 font-semibold">
                                                {edu.institution}
                                            </p>
                                            <p className="text-sm text-gray-500">{edu.location}</p>
                                        </div>
                                        <div className="text-right mt-2 md:mt-0">
                                            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                                                {edu.graduation}
                                            </p>
                                            <p className="text-yellow-400 font-bold">{edu.gpa}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {edu.highlights.map((highlight) => (
                                            <span
                                                key={highlight}
                                                className={`px-3 py-1 text-xs font-semibold rounded-full ${theme === "dark"
                                                        ? "bg-yellow-400 text-black"
                                                        : "bg-blue-500 text-white"
                                                    }`}
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
