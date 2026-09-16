import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import HText from "@/common/HText";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const inputClasses =
    "w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white";

export default function ContactForm() {
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
        <section id="contact" className="w-full py-24">
            <div className="mx-auto w-5/6 max-w-6xl">
                <HText>Get in touch</HText>
                <p className="my-5 max-w-2xl text-zinc-500 dark:text-zinc-400">
                    Open to remote full-stack roles and freelance work. If you're
                    building something data-intensive, let's talk.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
                    {/* Contact info */}
                    <div>
                        <div className="space-y-5">
                            <div className="flex items-start gap-3">
                                <Mail className="mt-1 flex-shrink-0 text-amber-600 dark:text-amber-400" size={20} />
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <a
                                        href="mailto:chiragmandyal82@gmail.com"
                                        className="text-zinc-600 transition-colors hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400"
                                    >
                                        chiragmandyal82@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="mt-1 flex-shrink-0 text-amber-600 dark:text-amber-400" size={20} />
                                <div>
                                    <p className="font-semibold">Phone</p>
                                    <a
                                        href="tel:+918219600177"
                                        className="text-zinc-600 transition-colors hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400"
                                    >
                                        +91-8219600177
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-1 flex-shrink-0 text-amber-600 dark:text-amber-400" size={20} />
                                <div>
                                    <p className="font-semibold">Location</p>
                                    <p className="text-zinc-600 dark:text-zinc-400">
                                        Himachal Pradesh, India{" "}
                                        <span className="font-mono text-sm text-zinc-500">(UTC+5:30)</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="mt-10">
                            <h4 className="mb-4 text-lg font-bold">Connect with me</h4>
                            <div className="flex items-center gap-4">
                                {[
                                    {
                                        href: "https://www.linkedin.com/in/chirag-mandyal-543575152/",
                                        icon: <GrLinkedin className="h-5 w-5" />,
                                        label: "LinkedIn",
                                    },
                                    {
                                        href: "https://wa.me/918219600177",
                                        icon: <FaWhatsapp className="h-5 w-5" />,
                                        label: "WhatsApp",
                                    },
                                ].map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className="rounded-lg border border-zinc-300 p-3 text-zinc-600 transition-all hover:-translate-y-0.5 hover:border-amber-500 hover:text-amber-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-[#13161c]"
                    >
                        <div>
                            <label className="mb-2 block text-sm font-medium">Name</label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                type="text"
                                className={`${inputClasses} ${errors.name ? "border-red-500" : ""}`}
                                placeholder="Your name"
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">Email</label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                type="email"
                                className={`${inputClasses} ${errors.email ? "border-red-500" : ""}`}
                                placeholder="Your email"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">Subject</label>
                            <input
                                {...register("subject", { required: "Subject is required" })}
                                type="text"
                                className={`${inputClasses} ${errors.subject ? "border-red-500" : ""}`}
                                placeholder="Subject"
                            />
                            {errors.subject && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.subject.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">Message</label>
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                rows={5}
                                className={`${inputClasses} ${errors.message ? "border-red-500" : ""}`}
                                placeholder="Your message"
                            />
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 font-bold text-zinc-950 shadow-md transition-all hover:bg-amber-400 hover:shadow-lg disabled:opacity-50 dark:bg-amber-400 dark:hover:bg-amber-300"
                        >
                            <Send size={18} />
                            {isSubmitting ? "Sending..." : "Send message"}
                        </button>

                        {submitStatus === "success" && (
                            <p className="text-center text-emerald-600 dark:text-emerald-400">
                                Message sent successfully! 🎉
                            </p>
                        )}
                        {submitStatus === "error" && (
                            <p className="text-center text-red-500">
                                Failed to send message. Please try again.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
