import { SelectedPage } from "@/common/types";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Skill({ icon, title }: Props) {
  return (
    <motion.div
      variants={childVariant}
      className="group flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-amber-500 hover:shadow-md dark:border-zinc-800 dark:bg-[#13161c] dark:hover:border-amber-400"
    >
      <div className="text-zinc-500 transition-colors group-hover:text-amber-600 dark:text-zinc-400 dark:group-hover:text-amber-400">
        {icon}
      </div>
      <h4 className="font-semibold">{title}</h4>
    </motion.div>
  );
}
