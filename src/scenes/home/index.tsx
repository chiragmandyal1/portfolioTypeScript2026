import resumePdf from "@/assets/resumePdf/Chirag_Mandyal_Resume.pdf";
import ActionButton from "@/common/ActionButton";
import { SelectedPage } from "@/common/types";
import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "years experience" },
  { value: "100K+", label: "devices tracked" },
  { value: "64K+", label: "active links" },
  { value: "241", label: "enterprise clients" },
];

const Home = ({ setSelectedPage }: { setSelectedPage: (value: SelectedPage) => void }) => {
  return (
    <section id="aboutme" className="bg-grid w-full pb-24 pt-28 md:pt-36">
      <motion.div
        className="mx-auto flex w-5/6 max-w-6xl flex-col items-center gap-14 md:flex-row md:gap-10"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}
      >
        {/* Intro */}
        <div className="md:basis-3/5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 inline-block rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1 font-mono text-xs font-medium tracking-wide text-amber-700 dark:text-amber-300">
              Full Stack Developer — React · NestJS · TypeScript
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Hi, I'm Chirag.
              <br />
              I build{" "}
              <span className="text-amber-600 dark:text-amber-400">
                data-intensive
              </span>{" "}
              systems that stay up.
            </h1>
          </motion.div>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Sole developer of a satellite-network monitoring platform — real-time
            NOC dashboards, dual-database telemetry, and role-based access for
            enterprise clients in banking, telecom, and defense.
          </motion.p>

          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Contact me
            </ActionButton>
            <a href={resumePdf} download="Chirag_Mandyal_Resume.pdf">
              <button className="rounded-lg border border-zinc-300 bg-transparent px-8 py-3 font-semibold text-zinc-700 transition-all hover:-translate-y-0.5 hover:border-amber-500 hover:text-amber-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-amber-400 dark:hover:text-amber-400">
                Get resume
              </button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-mono text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Terminal card */}
        <motion.div
          className="w-full max-w-md md:basis-2/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-[#13161c]">
            <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-100 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 font-mono text-xs text-zinc-500">
                fleet-monitor — zsh
              </span>
            </div>
            <div className="space-y-2.5 p-5 font-mono text-[13px] leading-relaxed">
              <p className="text-zinc-500">
                <span className="text-emerald-600 dark:text-emerald-400">$</span>{" "}
                fleet status --live
              </p>
              <p>
                <span className="text-emerald-600 dark:text-emerald-400">✓</span>{" "}
                <span className="text-zinc-800 dark:text-zinc-200">64,213 links online</span>{" "}
                <span className="text-zinc-500">· 99.97% availability</span>
              </p>
              <p className="text-zinc-500">
                devices&nbsp;&nbsp;&nbsp;<span className="text-zinc-800 dark:text-zinc-200">100,482 provisioned</span>
              </p>
              <p className="text-zinc-500">
                telemetry&nbsp;<span className="text-zinc-800 dark:text-zinc-200">TimescaleDB · MongoDB</span>
              </p>
              <p className="text-zinc-500">
                access&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-800 dark:text-zinc-200">7-role RBAC enforced</span>
              </p>
              <p className="text-zinc-500">
                stack&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-600 dark:text-amber-400">React · NestJS · TypeScript</span>
              </p>
              <p className="text-zinc-500">
                <span className="text-emerald-600 dark:text-emerald-400">$</span>{" "}
                <span className="animate-pulse">▊</span>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
