import { SelectedPage } from "@/common/types";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

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
  const { theme } = useTheme();
  return (
    <motion.div
      variants={childVariant}
      className="mt-2 rounded-md px-3 py-4 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className={`rounded-full border-2 p-4 transition-all ${theme === "dark"
            ? "bg-yellow-400 border-yellow-400 hover:bg-yellow-500 text-gray-900"
            : "bg-gradient-to-br from-blue-500 to-purple-600 border-blue-500 hover:scale-110 hover:shadow-lg text-white"
          }`}>
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
    </motion.div>
  );
}
