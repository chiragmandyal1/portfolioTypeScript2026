import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  const { theme } = useTheme();
  return (
    <AnchorLink
      className={`rounded-md px-10 py-2 font-semibold transition-all shadow-md hover:shadow-lg ${theme === "dark"
          ? "bg-yellow-400 text-black hover:bg-yellow-500"
          : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
        }`}
      onClick={() => setSelectedPage(SelectedPage.Footer)}
      href={`#${SelectedPage.Footer}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
