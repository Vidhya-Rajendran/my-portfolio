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
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tagline */}
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
              {portfolioData.title} • {portfolioData.subtitle}
            </p>

            {/* Headline */}
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight !text-white md:text-6xl md:leading-tight">
              I build reliable{" "}
              <span className="text-cyan-300">
                full stack products
              </span>{" "}
              and scalable backend systems.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {portfolioData.intro}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Contact Me
              </a>

              <a
                href={portfolioData.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-100 transition hover:bg-cyan-400/15"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
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

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
          >
            <div className="flex flex-col items-center text-center">
              
              {/* Profile Image */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl" />
                <img
                  src={profile}
                  alt="Profile"
                  className="relative h-40 w-40 rounded-full border-4 border-cyan-400/40 object-cover object-[center_10%]"
                />
              </div>

              {/* Name */}
              <h3 className="mt-5 text-xl font-semibold">
                {portfolioData.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-slate-400">
                {portfolioData.title}
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-white/10" />

              {/* Highlights */}
              <div className="grid gap-4 text-left justify-between">
                {portfolioData.highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <h4 className="font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
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