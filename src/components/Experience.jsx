import { motion } from "motion/react";
import { Briefcase, Sparkles, CalendarDays } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="experience">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            Professional journey
          </h2>
        </div>

        <p className="max-w-2xl text-slate-400">
          Roles where I’ve built scalable products, improved reliability, and
          delivered backend-heavy full stack systems with real business impact.
        </p>
      </div>

      <div className="relative mt-10">
        <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-white/10 md:block" />

        <div className="space-y-8">
          {portfolioData.experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative md:pl-16"
            >
              <div className="absolute left-0 top-6 z-10 hidden md:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-500/10">
                  <Briefcase className="h-5 w-5" />
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur transition hover:border-cyan-400/20 hover:bg-white/[0.07] md:p-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div>
                            <h3 className="text-2xl font-semibold text-white">
                                {item.role}
                            </h3>
                        </div>
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
                            {item.company}
                        </span>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
                            <CalendarDays className="h-4 w-4 text-cyan-300" />
                            {item.period}
                        </div>                
                    </div>                   
                  </div>

                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm leading-7 text-cyan-50 lg:max-w-md">
                    <div className="mb-1 flex items-center gap-2 text-cyan-200">
                      <Sparkles className="h-4 w-4" />
                      <span className="font-medium">Role impact</span>
                    </div>
                    <p>{item.highlight}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {item.achievements.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition hover:border-cyan-400/20"
                    >
                      <p className="text-sm leading-7 text-slate-300">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                    Tools & technologies
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition hover:border-cyan-300/30 hover:bg-cyan-400/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}