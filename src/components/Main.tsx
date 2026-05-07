"use client"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import { PROFILE } from "@/lib/constants"
import { scrollToSection } from "@/lib/utils"

function BackgroundBlobs() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/15 rounded-full blur-[160px] animate-blob" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/15 rounded-full blur-[160px] animate-blob [animation-delay:4s]" />
    </div>
  )
}

interface SocialLinkProps {
  href: string
  label: string
  animationClass?: string
  children: React.ReactNode
}

function SocialLink({
  href,
  label,
  animationClass = "",
  children,
}: SocialLinkProps) {
  const isExternal = !href.startsWith("mailto:")
  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center
        hover:border-rose-500 hover:bg-slate-800 transition-all group hover:scale-125 hover:-translate-y-2 ${animationClass}`}
    >
      {children}
    </a>
  )
}

export default function Main() {
  return (
    <section
      id="main"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16 pt-32 md:pt-24"
    >
      <BackgroundBlobs />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Available badge */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/20 to-red-500/20 border border-rose-500/30 hover:border-rose-500/50 transition-all hover:shadow-lg hover:shadow-rose-500/30 cursor-default hover:scale-105">
            <span className="inline-block w-2 h-2 bg-rose-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-rose-300">
              Available for new opportunities
            </span>
          </div>
        </div>

        {/* Avatar + Headline */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32 items-center justify-center w-full mb-10">
          {/* Avatar & info */}
          <div className="flex flex-col items-center flex-shrink-0 animate-slide-in-left">
            <span className="text-8xl mb-6 hover:scale-125 transition-transform duration-300 cursor-pointer inline-block animate-float">
              👩🏽‍💻
            </span>
            <h2 className="text-2xl font-bold text-white text-center hover:text-rose-400 hover:scale-105 transition-all duration-300">
              {PROFILE.fullName}
            </h2>
            <p className="text-sm text-rose-400 font-medium text-center mt-2 mb-6">
              {PROFILE.title}
            </p>

            {/* Social links */}
            <div className="flex gap-4 justify-center">
              <SocialLink
                href={PROFILE.socials.github}
                label="GitHub"
                animationClass="animate-slide-in-left"
              >
                <FaGithub className="w-4 h-4 text-slate-400 group-hover:text-rose-400 transition-colors" />
              </SocialLink>
              <SocialLink
                href={PROFILE.socials.linkedin}
                label="LinkedIn"
                animationClass="animate-fade-in delay-100"
              >
                <FaLinkedin className="w-4 h-4 text-slate-400 group-hover:text-rose-400 transition-colors" />
              </SocialLink>
              <SocialLink
                href={`mailto:${PROFILE.email}`}
                label="Email"
                animationClass="animate-slide-in-right delay-200"
              >
                <MdEmail className="w-4 h-4 text-slate-400 group-hover:text-rose-400 transition-colors" />
              </SocialLink>
            </div>
          </div>

          {/* Headline & description */}
          <div className="max-w-2xl text-center md:text-left animate-slide-in-right">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
              <span className="text-white inline-block hover:text-rose-300 hover:scale-105 transition-all duration-300">
                Welcome here —
              </span>
              <br />
              <span className="text-4xl sm:text-5xl bg-gradient-to-r from-rose-400 via-red-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Let's build something.
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6 hover:text-slate-200 transition-colors duration-300">
              {PROFILE.description}
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 animate-fade-in">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-rose-500/70 transition-all hover:scale-110 cursor-pointer"
          >
            View My Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-slate-600 text-white rounded-lg font-semibold hover:border-rose-400 hover:bg-slate-800 transition-all cursor-pointer hover:scale-110"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}
