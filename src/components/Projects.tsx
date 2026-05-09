"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FaGithub, FaInfoCircle } from "react-icons/fa"
import { PROJECTS } from "@/lib/constants"

type Filter = "all" | "favorites"

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All projects" },
  { value: "favorites", label: "Favorites" },
]

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all")
  const router = useRouter()

  const filteredProjects =
    filter === "favorites"
      ? PROJECTS.filter((p) => p.favorite)
      : [...PROJECTS].sort((a, b) => b.date.localeCompare(a.date))

  const availableFilters = FILTERS.filter(({ value }) =>
    value === "all" ? true : PROJECTS.some((p) => p.favorite),
  )

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title section */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-red-500 rounded" />
        </div>

        {/* Filter buttons */}
        {availableFilters.length > 1 && (
          <div className="flex gap-4 mb-12">
            {availableFilters.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filter === value
                    ? "bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-lg shadow-rose-500/50"
                    : "border border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => router.push(`/projects/${project.id}`)}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/10 transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Icon & favorite badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{project.image}</div>
                  {project.favorite && (
                    <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 text-xs font-semibold rounded-full">
                      ⭐
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-rose-400 group-hover:to-red-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-rose-500/10 border border-rose-500/30 text-rose-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-slate-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex flex-col items-center gap-2 text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <FaGithub className="w-7 h-7" />
                  <span className="text-xs font-medium">GitHub</span>
                </a>

                <a
                  href={`/projects/${project.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex flex-col items-center gap-2 text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <FaInfoCircle className="w-7 h-7" />
                  <span className="text-xs font-medium">Details</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
