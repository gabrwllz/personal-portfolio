"use client"

import { EXPERIENCE } from "@/lib/constants"
import { HiExternalLink } from "react-icons/hi"

function ExperienceCard({ exp }: { exp: (typeof EXPERIENCE)[number] }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/10 transition-all">
      <div className="mb-4">
        <span className="text-slate-400 text-sm font-medium">{exp.period}</span>
        <h3 className="text-xl font-bold text-white mt-1 mb-1">{exp.role}</h3>
        {exp.url ? (
          <a
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-rose-400 font-semibold hover:text-rose-300 transition-colors"
          >
            {exp.company}
            <HiExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <p className="text-rose-400 font-semibold">{exp.company}</p>
        )}
      </div>
      <p className="text-slate-300 leading-relaxed mb-4">{exp.description}</p>
      <div className="flex flex-wrap gap-2">
        {exp.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gradient-to-r from-rose-500/20 to-red-500/20 border border-rose-500/30 text-rose-300 text-sm rounded-full hover:from-rose-500/30 hover:to-red-500/30 transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title section */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-red-500 rounded" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-700" />

          <div className="flex flex-col gap-12">
            {EXPERIENCE.map((exp, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <div
                  key={exp.role}
                  className="relative flex items-center justify-between"
                >
                  {/* Left card or spacer */}
                  <div className="w-[calc(50%-1.25rem)]">
                    {isLeft && <ExperienceCard exp={exp} />}
                  </div>

                  {/* Dot central */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-rose-400 to-red-500 border-4 border-slate-950 z-10 flex-shrink-0" />

                  {/* Right card or spacer */}
                  <div className="w-[calc(50%-1.25rem)]">
                    {!isLeft && <ExperienceCard exp={exp} />}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CV button */}
        <div className="mt-16 text-center">
          <a
            href="/CV_GabrielleBouchard.pdf"
            download
            className="inline-block px-8 py-3 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-rose-500/50 transition-all hover:scale-105"
          >
            Download My CV
          </a>
        </div>
      </div>
    </section>
  )
}
