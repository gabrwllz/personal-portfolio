import { EXPERIENCE_START, SKILLS } from "./constants"

export const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function getYearsOfExperience(): string {
  const now = new Date()
  const diffMs = now.getTime() - EXPERIENCE_START.getTime()
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25)

  const rounded = Math.floor(diffYears * 2) / 2
  const capped = Math.min(rounded, 5)

  return capped % 1 === 0 ? `${capped}` : `${capped}`
}

export function getTotalSkills(): number {
  const total = SKILLS.reduce((sum, category) => sum + category.items.length, 0)
  return Math.round(total / 10) * 10
}
