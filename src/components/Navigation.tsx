"use client"

import { useState } from "react"
import { HiMenu } from "react-icons/hi"

import { scrollToSection } from "@/lib/utils"

const NAV_ITEMS = [
  { href: "main", label: "Home" },
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "contact", label: "Contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNav = (id: string) => {
    setIsOpen(false)
    scrollToSection(id)
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop */}
        <div className="flex justify-center items-center h-16">
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className="text-slate-300 hover:text-white transition-colors text-sm font-semibold"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute right-4 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <HiMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800">
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className="text-slate-300 hover:text-white py-2 px-4 rounded hover:bg-slate-900 transition-colors text-sm font-semibold"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
