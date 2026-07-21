import { SelectedPage } from "@/common/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "./Link";
import ThemeToggle from "@/common/ThemeToggle";
import SearchBar from "@/common/SearchBar";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const pages = ["About Me", "Skills", "Education", "Experience", "Projects"];

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <nav className="sticky top-0 z-30 w-full transition-all duration-300">
      <div
        className={`${flexBetween} w-full border-b py-4 backdrop-blur-md transition-colors duration-300 ${isTopOfPage
          ? "border-transparent bg-stone-50/70 dark:bg-[#0c0e12]/70"
          : "border-zinc-200 bg-stone-50/85 shadow-sm dark:border-zinc-800 dark:bg-[#0c0e12]/85"
          }`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Logo */}
            <a href="#aboutme" className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80">
              <span className="font-mono text-2xl font-bold text-amber-500 dark:text-amber-400">&lt;</span>
              <div>
                <h1 className="text-lg font-extrabold leading-none tracking-tight">CHIRAG</h1>
                <p className="font-mono text-[10px] font-semibold tracking-[0.25em] text-amber-600 dark:text-amber-400">
                  MANDYAL
                </p>
              </div>
              <span className="font-mono text-2xl font-bold text-amber-500 dark:text-amber-400">/&gt;</span>
            </a>

            {/* Desktop menu */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div />
                <div className={`${flexBetween} gap-8`}>
                  {pages.map((page) => (
                    <Link
                      key={page}
                      page={page}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                  <a
                    href="#contact"
                    className="rounded-lg border border-amber-500 px-4 py-1.5 text-sm font-semibold text-amber-600 transition-colors hover:bg-amber-500 hover:text-zinc-950 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-400"
                  >
                    Hire me
                  </a>
                  <SearchBar />
                  <ThemeToggle />
                </div>
              </div>
            ) : (
              <button
                className="rounded-lg border border-zinc-300 p-2 dark:border-zinc-700"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                aria-label="Open menu"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] border-l border-zinc-200 bg-white drop-shadow-xl dark:border-zinc-800 dark:bg-[#0c0e12]">
          <div className="flex justify-end p-8">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)} aria-label="Close menu">
              <XMarkIcon className="h-6 w-6 text-zinc-400" />
            </button>
          </div>
          <div
            className="ml-[20%] flex flex-col gap-8 text-xl"
            onClick={() => setIsMenuToggled(false)}
          >
            {pages.map((page) => (
              <Link
                key={page}
                page={page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
          <div className="ml-[20%] mt-10">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
