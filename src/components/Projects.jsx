import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16" id="projects">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Projects
          </p>
          <h2 className="mt-2 text-2xl font-semibold !text-white sm:text-3xl">
            Selected work
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          Work that reflects my experience in backend systems, business
          workflows, and full stack delivery.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {portfolioData.projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-400/30 sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold leading-8 text-white sm:text-xl">
                {project.title}
              </h3>
            </div>

            <p className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/15 px-4 py-3 text-sm font-medium leading-7 text-cyan-50">
              {project.impact}
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10 flex flex-col items-ce nter justify-center rounded-3xl border border-dashed border-white/10 bg-white/5 p-6 text-center sm:p-8"
      >
        <p className="text-base font-medium text-white sm:text-lg">
          + Many more projects across backend systems, AI workflows, and full stack applications
        </p>

        <p className="mt-2 max-w-xl text-sm leading-7 text-slate-400">
          Including production systems, integrations, and internal tools not publicly listed here.
        </p>
      </motion.div>
    </section>
  );
}