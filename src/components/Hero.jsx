import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
              {portfolioData.title} • {portfolioData.subtitle}
            </p>

            <h1 className="max-w-4xl text-3xl font-bold tracking-tight !text-white sm:text-4xl md:text-6xl md:leading-tight">
              I build reliable <span className="text-cyan-300">full stack products</span> and{" "}
              <span className="text-cyan-300">scalable backend systems</span>.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {portfolioData.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={portfolioData.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-100 transition hover:bg-cyan-400/15"
              >
                <Download className="h-4 w-4" /> Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {portfolioData.stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="mt-2 text-base font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur sm:p-6 lg:order-2"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl" />
                <img
                  src={profile}
                  alt={portfolioData.name}
                  className="relative h-32 w-32 rounded-full border-4 border-cyan-400/40 object-cover object-[50%_10%] sm:h-40 sm:w-40"
                />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {portfolioData.name}
              </h3>

              <p className="text-sm text-slate-400">{portfolioData.title}</p>

              <div className="mt-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Open to opportunities
              </div>

              <div className="my-6 h-px w-full bg-white/10" />

              <div className="grid w-full gap-4 text-left">
                {portfolioData.highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/20"
                  >
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}