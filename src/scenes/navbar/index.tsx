import { SelectedPage } from "@/common/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "./Link";
import ThemeToggle from "@/common/ThemeToggle";
import SearchBar from "@/common/SearchBar";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const { theme } = useTheme();
  const navbarBackground = isTopOfPage
    ? ""
    : theme === "dark"
      ? "bg-gray-900 drop-shadow-lg"
      : "bg-white/95 backdrop-blur-sm drop-shadow-lg border-b border-blue-200";
  return (
    <nav className="sticky top-0 z-30 w-full transition-all duration-300">
      {/* parent box of the navbar*/}
      <div
        className={`${navbarBackground} ${flexBetween} w-full py-6 transition-colors duration-300`}
      >
        {/* box that contains both the logo and the other options of the navbar*/}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/*left logo side of the navbar*/}
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-2xl font-bold text-yellow-400">&lt;</span>
              <div>
                <h1 className="text-lg font-bold leading-none">CHIRAG</h1>
                <p className="text-xs font-semibold text-yellow-400">MANDYAL</p>
              </div>
              <span className="text-2xl font-bold text-yellow-400">/&gt;</span>
            </div>
            {/*Right other side of the navbar*/}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/*inner right side*/}
                <div className={`${flexBetween} gap-8 text-sm`}></div>
                {/*Outer right side*/}
                <div className={`${flexBetween} gap-8 text-lg`}>
                  <Link
                    page="About Me"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <SearchBar />
                  <ThemeToggle />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/*Mobile Menu Modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/** Close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* Menu Items  */}
          <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
            <Link
              page="About Me"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
