import { useSearch } from "@/context/SearchContext";
import { useTheme } from "@/context/ThemeContext";
import { Search, X } from "lucide-react";

export default function SearchBar() {
    const { searchQuery, setSearchQuery, isSearchOpen, setIsSearchOpen } =
        useSearch();
    const { theme } = useTheme();

    return (
        <div className="relative">
            <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Open search"
            >
                <Search size={20} />
            </button>

            {isSearchOpen && (
                <div
                    className={`absolute top-full right-0 mt-2 w-72 p-3 rounded-lg shadow-lg border ${theme === "dark"
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-200"
                        }`}
                >
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search projects, skills..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-white"
                                : "bg-white border-gray-300 text-black"
                                }`}
                            autoFocus
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
