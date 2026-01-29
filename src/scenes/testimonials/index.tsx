import { SelectedPage } from "@/common/types";
import HText from "@/common/HText";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Props {
    setSelectedPage: (value: SelectedPage) => void;
}

export default function Testimonials({ setSelectedPage }: Props) {
    const { theme } = useTheme();

    const testimonials = [
        {
            name: "Alex Johnson",
            role: "Project Manager",
            text: "Chirag is an exceptional developer with great attention to detail. His solutions are clean, efficient, and well-documented.",
            rating: 5,
        },
        {
            name: "Sarah Chen",
            role: "Senior Developer",
            text: "Working with Chirag on the project was a pleasure. Very responsive to feedback and produces quality code consistently.",
            rating: 5,
        },
        {
            name: "Michael Rodriguez",
            role: "Client",
            text: "Delivered the project on time with excellent quality. Would definitely recommend for any web development needs.",
            rating: 5,
        },
        {
            name: "Emma Wilson",
            role: "Team Lead",
            text: "Great communication skills and problem-solving ability. Chirag integrates well with the team and learns quickly.",
            rating: 5,
        },
    ];

    return (
        <section
            id="testimonials"
            className={`mx-auto w-full px-4 py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gradient-to-b from-blue-50 to-purple-50"
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
                    <HText>Testimonials</HText>
                    <p className="my-5 text-sm">What others say about working with me</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-lg shadow-md hover:shadow-xl transition-all ${theme === "dark"
                                ? "bg-gray-900 border border-gray-700"
                                : "bg-white border border-blue-200 hover:border-blue-400"
                                }`}
                        >
                            <div className="flex gap-1 mb-3">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                            <p className="mb-4 italic">"{testimonial.text}"</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
