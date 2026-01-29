import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useTheme } from "@/context/ThemeContext";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const { isVisible, scrollToTop } = useScrollToTop();
    const { theme } = useTheme();

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === "dark"
                    ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                    : "bg-yellow-300 hover:bg-yellow-400 text-black"
                } shadow-lg`}
            aria-label="Scroll to top"
        >
            <ArrowUp size={24} />
        </button>
    );
}
