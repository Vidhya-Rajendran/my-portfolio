import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20" id="contact">
      <div className="rounded-[28px] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-sky-400/10 p-6 shadow-2xl sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Contact
            </p>
            <h2 className="mt-3 text-2xl font-semibold !text-white sm:text-3xl">
              Open to Senior Full Stack Engineer opportunities.
            </h2>
          </div>

          <div className="grid gap-4">
            <a
              href={`mailto:${portfolioData.email}`}
              className="flex w-full items-center gap-3 rounded-2xl border border-cyan-200/20 bg-white/5 px-4 py-4 text-cyan-50 transition hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
              {portfolioData.email}
            </a>

            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center gap-3 rounded-2xl border border-cyan-200/20 bg-white/5 px-4 py-4 text-cyan-50 transition hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>

            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center gap-3 rounded-2xl border border-cyan-200/20 bg-white/5 px-4 py-4 text-cyan-50 transition hover:bg-white/10"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}