import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-lg bg-amber-500 px-8 py-3 font-semibold text-zinc-950 shadow-md transition-all hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lg dark:bg-amber-400 dark:hover:bg-amber-300"
      offset={90}
      onClick={() => setSelectedPage(SelectedPage.Footer)}
      href="#contact"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
