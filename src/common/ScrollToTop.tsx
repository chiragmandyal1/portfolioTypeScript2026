import { useScrollToTop } from "@/hooks/useScrollToTop";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const { isVisible, scrollToTop } = useScrollToTop();

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 rounded-full border border-zinc-200 bg-white p-3 text-zinc-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:text-amber-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-amber-400 dark:hover:text-amber-400"
            aria-label="Scroll to top"
        >
            <ArrowUp size={22} />
        </button>
    );
}
