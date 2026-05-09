import { notFound } from "next/navigation"
import Link from "next/link"
import { PROJECTS } from "@/lib/constants"
import { FaGithub } from "react-icons/fa"
import { HiArrowLeft, HiExternalLink } from "react-icons/hi"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = PROJECTS.find((p) => p.id === Number(id))

  if (!project) notFound()

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12"
        >
          <HiArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <span className="text-6xl mb-6 inline-block">{project.image}</span>
          <div className="flex items-center gap-4 mt-4">
            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            {project.favorite && (
              <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 text-xs font-semibold rounded-full">
                Favorite ⭐
              </span>
            )}
          </div>
          <p className="text-slate-400 text-sm mt-2">{project.date}</p>
        </div>

        {/* Description */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-8">
          <p className="text-slate-300 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Technologies */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-8">
          <h2 className="text-white font-semibold mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-rose-500/10 border border-rose-500/30 text-rose-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 text-white rounded-lg font-semibold hover:border-rose-500 transition-all"
          >
            <FaGithub className="w-5 h-5" />
            View on GitHub
          </a>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-rose-500/30 transition-all"
            >
              <HiExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </main>
  )
}