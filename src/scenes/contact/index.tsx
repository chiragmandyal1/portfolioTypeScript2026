import { useTheme } from "@/context/ThemeContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { GrLinkedin } from "react-icons/gr";
import { MdAttachEmail } from "react-icons/md";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}
export default function ContactForm() {
    const { theme } = useTheme();
    const { register, handleSubmit, reset, formState: { errors } } =
        useForm<ContactFormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            // Using Formspree service for form submissions
            await axios.post(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message,
            });
            setSubmitStatus("success");
            reset();
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className={`rounded-lg p-8 shadow-xl ${theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-blue-200"
                }`}
        >
            {/* Branding Section */}
            <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl font-bold text-yellow-400">&lt;</span>
                    <div>
                        <h1 className="text-2xl font-bold leading-none">CHIRAG</h1>
                        <p className="text-sm font-semibold text-yellow-400">MANDYAL</p>
                    </div>
                    <span className="text-3xl font-bold text-yellow-400">/&gt;</span>
                </div>
                <p className="text-lg max-w-2xl">
                    Ready to start a new project? I'm here to help! As a full-stack
                    developer, I'm eager to bring your ideas to life. Feel free to get
                    in touch using the provided contact information. Let's create
                    something amazing together!
                </p>
            </div>

            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

            {/* Contact Info and Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Contact Information */}
                <div>
                    <h4 className="text-lg font-bold mb-6">Contact Information</h4>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <Mail className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                            <div>
                                <p className="font-semibold">Email</p>
                                <a
                                    href="mailto:chiragmandyal82@gmail.com"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    chiragmandyal82@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Phone
                                className="text-yellow-400 mt-1 flex-shrink-0"
                                size={20}
                            />
                            <div>
                                <p className="font-semibold">Phone</p>
                                <a
                                    href="tel:+918219600177"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    +91-8219600177
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin
                                className="text-yellow-400 mt-1 flex-shrink-0"
                                size={20}
                            />
                            <div>
                                <p className="font-semibold">Location</p>
                                <p>Mandi, Himachal Pradesh, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-8">
                        <h4 className="text-lg font-bold mb-4">Connect With Me</h4>
                        <div className="flex items-center gap-6">
                            <a
                                href="https://www.linkedin.com/in/chirag-mandyal-543575152/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition-colors"
                            >
                                <GrLinkedin className="h-8 w-8" />
                            </a>
                            <a
                                href="https://github.com/chiragmandyal1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition-colors"
                            >
                                <VscGithub className="h-8 w-8" />
                            </a>
                            <a
                                href="mailto:chiragmandyal82@gmail.com"
                                className="hover:text-yellow-400 transition-colors"
                            >
                                <MdAttachEmail className="h-8 w-8" />
                            </a>
                            <a
                                href="https://wa.me/918219600177"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition-colors"
                            >
                                <FaWhatsapp className="h-8 w-8" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-white"
                                : "bg-white border-gray-300"
                                } ${errors.name ? "border-red-500" : ""}`}
                            placeholder="Your name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            type="email"
                            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-white"
                                : "bg-white border-gray-300"
                                } ${errors.email ? "border-red-500" : ""}`}
                            placeholder="Your email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Subject</label>
                        <input
                            {...register("subject", { required: "Subject is required" })}
                            type="text"
                            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-white"
                                : "bg-white border-gray-300"
                                } ${errors.subject ? "border-red-500" : ""}`}
                            placeholder="Subject"
                        />
                        {errors.subject && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.subject.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                            {...register("message", { required: "Message is required" })}
                            rows={5}
                            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-white"
                                : "bg-white border-gray-300"
                                } ${errors.message ? "border-red-500" : ""}`}
                            placeholder="Your message"
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full font-bold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-md hover:shadow-lg ${theme === "dark"
                            ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                            : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                            }`}
                    >
                        <Send size={18} />
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {submitStatus === "success" && (
                        <p className="text-green-500 text-center">
                            Message sent successfully! 🎉
                        </p>
                    )}
                    {submitStatus === "error" && (
                        <p className="text-red-500 text-center">
                            Failed to send message. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
