"use client";

import { PROJECTS } from "@/lib/constants"
import { getTotalSkills, getYearsOfExperience } from "@/lib/utils"

const DEV_VALUES = [
  {
    color: "bg-rose-400",
    label: "Code quality",
    description: "Clean, readable, and maintainable code above all.",
  },
  {
    color: "bg-rose-500",
    label: "Continuous learning",
    description: "The best developers are perpetually curious students.",
  },
  {
    color: "bg-red-400",
    label: "User focus",
    description: "Every decision starts with the end-user experience in mind.",
  },
  {
    color: "bg-pink-400",
    label: "Collaboration",
    description: "Great software is built together, not in isolation.",
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
              About me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-red-500 rounded" />
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — bio */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a full-stack developer currently finishing a software
              engineering degree while working professionally as a frontend
              developer. I thrive at the intersection of clean architecture and
              polished interfaces.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I enjoy taking on complex problems — whether it's building a
              performant web app or designing an automated trading system from
              scratch. I care deeply about writing code that's not just
              functional, but maintainable and well-thought-out.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Outside of code, I have a passion for travelling and discovering
              new cultures — exploring unfamiliar places fuels the same
              curiosity that makes me a better developer.
            </p>
          </div>

          {/* Right — dev values */}
          <div className="relative order-3 md:order-2">
            <div className="bg-gradient-to-br from-rose-500/20 to-red-500/20 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all">
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-6">
                What I value as a dev
              </p>
              <div className="space-y-5">
                {DEV_VALUES.map(({ color, label, description }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div
                      className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${color}`}
                    />
                    <p className="text-slate-300">
                      <span className="text-white font-semibold">
                        {label} —{" "}
                      </span>
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-red-500/10 rounded-2xl blur-xl -z-10" />
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 mt-4 md:mt-10 pt-8 border-t border-slate-800 order-2 md:order-3 md:col-span-2">
            <div>
              <div className="text-3xl font-bold text-rose-400">
                {PROJECTS.length}
              </div>
              <div className="text-slate-400 text-sm">Projects completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400">
                {getYearsOfExperience()}+
              </div>
              <div className="text-slate-400 text-sm">Years of experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400">
                {getTotalSkills()}+
              </div>
              <div className="text-slate-400 text-sm">
                Technologies mastered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
