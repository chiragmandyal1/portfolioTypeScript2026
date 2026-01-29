import HomePageGraphic from "@/assets/HomePageGraphic.png";
import resumePdf from "@/assets/resumePdf/chiragJsTs.pdf";
import ActionButton from "@/common/ActionButton";
import { SelectedPage } from "@/common/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const { theme } = useTheme();

  return (
    <section
      id="aboutme"
      className={`gap-16 py-10 md:h-full md:pb-0 ${theme === "dark" ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 to-blue-50"
        }`}
    >
      {/* Image and main header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Logo/Branding */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-yellow-400">&lt;</span>
              <div>
                <h1 className="text-3xl font-bold leading-tight">CHIRAG</h1>
                <p className="text-xs font-bold text-yellow-400 tracking-widest">FULL STACK DEVELOPER</p>
              </div>
              <span className="text-4xl font-bold text-yellow-400">/&gt;</span>
            </div>
          </motion.div>

          {/* Headings */}
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              {/* Removed purple HomePageText image that was overlapping */}
            </div>
            <p className=" text-lg ">
              Full Stack Developer with nearly 4 years of experience building scalable, data-driven web applications using JavaScript and TypeScript. Experienced in React, Next.js, Node.js, and NestJS, with strong ownership of both frontend and backend systems. Currently managing a large-scale device monitoring platform handling 100K+ devices. Proven at modernising legacy systems and delivering reliable solutions in fast-paced startup environments.
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Contact info
            </ActionButton>
            <a href={resumePdf} download>
              <button className={`rounded-md px-10 py-2 font-semibold transition-all shadow-md hover:shadow-lg ${theme === "dark"
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
                }`}>
                Get Resume
              </button>
            </a>
          </motion.div>
        </div>
        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className={`h-[150px] w-full ${theme === "dark" ? "bg-gray-800" : "bg-gradient-to-r from-blue-100 to-purple-100"
          } py-10`}>
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
