"use client"

import { PROFILE } from "@/lib/constants"
import { scrollToSection } from "@/lib/utils"

const NAV_LINKS = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent mb-4">
              {PROFILE.fullName}
            </h3>
            <p className="text-slate-400 text-sm">
              Full-stack developer passionate about building modern and
              performant web solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className="hover:text-rose-400 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="hover:text-rose-400 transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="/cv.pdf"
                  download
                  className="hover:text-rose-400 transition-colors"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} {PROFILE.fullName}. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-4 sm:mt-0">
            Built with Next.js • Tailwind CSS • TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
