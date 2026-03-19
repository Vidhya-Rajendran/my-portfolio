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
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16" id="about">
      <div className="grid gap-6 sm:gap-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
            About
          </p>

          <h2 className="mt-3 text-2xl font-semibold !text-white sm:text-3xl">
            Engineering that balances reliability, speed, and business value.
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            My background spans full stack product development with strong
            backend specialization. I’ve worked on payment integrations,
            QR-based transaction flows, KYC systems, internal platforms, and
            business applications where API quality, reliability, and delivery
            matter.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            I’m especially effective in roles that need someone who can
            understand the complete workflow, own backend complexity,
            collaborate across the stack, and turn evolving requirements into
            stable, production-grade features.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
            Core Skills
          </p>

          <h2 className="mt-3 text-2xl font-semibold !text-white sm:text-3xl">
            Technology stack
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
            A detailed view of my technical strengths across backend systems,
            frontend delivery, cloud infrastructure, engineering practices, and
            business-domain collaboration.
          </p>

          <div className="mt-6 space-y-4 sm:mt-8">
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
                    className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left transition hover:bg-white/5 sm:gap-4 sm:px-5 sm:py-5"
                  >
                    <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                      <div className="mt-1 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2.5 text-cyan-300 sm:p-3">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-white sm:text-lg">
                          {section.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
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
                      <div className="px-4 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5">
                        <div className="flex max-w-4xl flex-wrap justify-center gap-2 sm:gap-3">
                          {section.items.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-100 transition hover:border-cyan-300/30 hover:bg-cyan-400/15 sm:px-4 sm:text-sm"
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