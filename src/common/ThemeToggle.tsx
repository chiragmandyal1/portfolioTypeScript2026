import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon size={20} className="text-gray-700" />
            ) : (
                <Sun size={20} className="text-yellow-400" />
            )}
        </button>
    );
}
