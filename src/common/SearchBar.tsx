import { useSearch } from "@/context/SearchContext";
import { Search, X } from "lucide-react";

export default function SearchBar() {
    const { searchQuery, setSearchQuery, isSearchOpen, setIsSearchOpen } =
        useSearch();

    return (
        <div className="relative">
            <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="rounded-lg p-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
                aria-label="Open search"
            >
                <Search size={20} />
            </button>

            {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 rounded-xl border border-zinc-200 bg-white p-3 shadow-lg dark:border-zinc-800 dark:bg-[#13161c]">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search projects, skills..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                            autoFocus
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 transform"
                                aria-label="Clear search"
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
