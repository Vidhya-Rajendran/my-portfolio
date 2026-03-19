import { useState } from "react";
import {
  ChevronDown,
  Server,
  Database,
  Layers,
  Monitor,
  Cloud,
  Briefcase,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const iconMap = {
  "Backend Engineering & APIs": Server,
  "Databases, Caching & Data Handling": Database,
  "Architecture, Quality & Engineering Practices": Layers,
  "Frontend & Full-Stack Development": Monitor,
  "Cloud, DevOps & Infrastructure": Cloud,
  "Product, Domain & Collaboration Skills": Briefcase,
};

export default function About() {
  const [openSection, setOpenSection] = useState("Backend Engineering & APIs");

  const toggleSection = (title) => {
    setOpenSection((prev) => (prev === title ? "" : title));
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="about">
      <div className="grid gap-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            About
          </p>

          <h2 className="mt-3 text-3xl font-semibold !text-white">
            Engineering that balances reliability, speed, and business value.
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            My background spans full stack product development with strong
            backend specialization. I’ve worked on payment integrations,
            QR-based transaction flows, KYC systems, internal platforms, and
            business applications where API quality, reliability, and delivery
            matter.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            I’m especially effective in roles that need someone who can
            understand the complete workflow, own backend complexity,
            collaborate across the stack, and turn evolving requirements into
            stable, production-grade features.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Core Skills
          </p>

          <h2 className="mt-3 text-3xl font-semibold !text-white">
            Technology stack
          </h2>

          <p className="mt-3 max-w-3xl text-slate-400">
            A detailed view of my technical strengths across backend systems,
            frontend delivery, cloud infrastructure, engineering practices, and
            business-domain collaboration.
          </p>

          <div className="mt-8 space-y-4">
            {portfolioData.skillSections.map((section) => {
              const isOpen = openSection === section.title;
              const Icon = iconMap[section.title] || Layers;

              return (
                <div
                  key={section.title}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 transition duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleSection(section.title)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition hover:bg-white/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {section.title}
                        </h3>
                        <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-400">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    <ChevronDown
                      className={`mt-1 h-5 w-5 shrink-0 text-cyan-300 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] border-t border-white/10"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-5">
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
                          {section.items.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition hover:border-cyan-300/30 hover:bg-cyan-400/15"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}